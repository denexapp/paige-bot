import { Mode, ModeObject } from '..'
import vk from '../../utils/vk'

const action: Mode = async message => {
  const { peer_id: peerId, text } = message

  await vk.messagesSend(peerId, text)
}

const echo: ModeObject = {
  description: 'echo_description',
  enabledText: 'echo_enabledText',
  disabledText: 'echo_disabledText',
  action
}

export default echo