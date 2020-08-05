import { ChatSettings } from './database/getChatSettings'
import messages from './messages'
import { commands } from '../commands'
import { Message } from './vkCallbackDecoders/messageNewDecoder'
import vk from './vk'

const getFirstWord = (text: string) => {
  const spaceIndex = text.indexOf(' ')
  return spaceIndex === -1 ? text : text.slice(0, spaceIndex)
}

const handleCommand = async (message: Message, settings: ChatSettings) => {
  const { from_id: fromId, peer_id: peerId, text } = message

  const commandName = getFirstWord(text).slice(1)
  const commandObject = commands[commandName]

  if (commandObject === undefined) {
    await vk.messagesSend(peerId, messages.unknownCommand)
    return
  }

  const privateMessage = message.peer_id < 2000000000

  if (privateMessage && !commandObject.worksInPrivateMessages) {
    await vk.messagesSend(peerId, messages.commandAvailableInAGroupChatOnly)
    return
  }

  if (!privateMessage && !commandObject.worksInGroupChats) {
    await vk.messagesSend(peerId, messages.commandAvailableInThePrivateChatOnly)
    return
  }

  if (commandObject.isAdminCommand) {
    const { items } = await vk.messagesGetConversationMembers(peerId)
    const memberIndex = items.findIndex(({ member_id }) => member_id === fromId)

    if (memberIndex === -1) {
      await vk.messagesSend(peerId, messages.commandCalledByLeftUser)
      return
    }

    if (!items[memberIndex].is_admin) {
      await vk.messagesSend(peerId, messages.commandAvailableForAdminsOnly)
      return
    }
  }

  if (commandObject.requiresCallbackServer && (settings.callbackServerChatId === null || settings.callbackServerUserId === null)) {
    await vk.messagesSend(peerId, messages.commandRequiresCallbackServer)
    return
  }

  await commandObject.command(message, settings)
}

export default handleCommand