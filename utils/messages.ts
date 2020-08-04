const messages = {
  unknownCommand: 'Unknown command. Use /help to list all commands',
  commandCalledByLeftUser: 'User who called this command left the chat',
  commandAvailableInThePrivateChatOnly: 'This command is available only in the private chat with me',
  commandAvailableInAGroupChatOnly: 'This command is available only in a group chat',
  commandAvailableForAdminsOnly: 'This command is available for admins only',
  echoDescription: 'echoes all new messages in the chat',
  echoEnabled: 'Echo enabled',
  echoDisabled: 'Echo disabled',
  helpDescription: 'lists all commands',
  helpUserCommands: 'User commands',
  helpAdminCommands: 'Admin commands',
  removeDescription: 'removes message with this command',
  callbackSecretDescription: 'shows your callback secret',
  callbackSecretMessage: 'Your callback secret',
  callbackSecretMessageAttention: 'Do not share this secret to anyone',
  callbackAddDescription: 'adds personal callback server',
  callbackAddFailError: 'Failed to add callback server. Make sure that server is online',
  callbackAddFailAlreadyExist: 'You alredy have connected callback server. To use this server instead, remove connected server first using /callbackRemove command',
  callbackAddFailBadUrl: 'Failed to add callback server. Provided url is not acceptable',
  callbackAddFailUrl: 'Server url',
  callbackAddSuccess: 'Callback server successfully added',
  callbackRemoveDescription: 'removes personal callback server and resets callback secret',
  callbackRemoveNotExist: 'You don\'t have a connected callback server to remove',
  callbackRemoveMessage: 'Your callback server has been disconnected. Callback secret has been reset. Don\'t forget to turn off your callback server, if necessary',
  callbackConnectDescription: 'connects your callback server to this conversation',
  callbackConnectCallbackServerAlreadyConnected: 'Another callback server is already connected to this conversation. If you want to replace it, disconnect current callback server by using /callbackDisconnect command',
  callbackConnectNoCallbackServer: 'You don\'t have a connected callback server. In order to connect this conversation to callback server, connect it to your account first by using /callbackAdd command',
  callbackConnectSameServer: 'Your callback server is already connected to this conversation',
  callbackConnectSuccess: 'Your callback server connected to this conversation',
  callbackDisconnectDescription: 'disconnects your callback server from this conversation',
  callbackDisconnectNotConnected: 'This conversation has no connected callback server',
  callbackDisconnectSuccess: 'Callback server has been disconnected from this conversation',
}

export default messages
