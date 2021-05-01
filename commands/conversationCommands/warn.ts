import { Sex } from 'vk-ts'
import { ConversationCommand, ConversationCommandObject } from "..";
import parseUserId from "../../utils/commandUtils/parseUserId";
import incrementUserWarningCount from "../../utils/database/incrementUserWarningCount";
import phrase from "../../utils/localization/phrase";
import vk from "../../utils/vk";

const command: ConversationCommand = async (message, settings) => {
  const { peer_id: peerId, text } = message;

  const [, unparsedUserId] = text.split(" ");

  if (unparsedUserId === undefined || unparsedUserId.length === 0) {
    await vk.messagesSend(peerId, phrase("warn_failNoUserId"));
    return;
  }

  const userId = await parseUserId(unparsedUserId);

  if (userId === null) {
    await vk.messagesSend(peerId, phrase("warn_failIncorrectUserId"));
    return;
  }

  const [count, [user]] = await Promise.all([
    incrementUserWarningCount(peerId, userId),
    vk.usersGet([userId])
  ]);

  await vk.messagesSend(peerId, phrase("warn_success", { count, sex: user.sex === Sex.Female ? 'female' : 'male' }));

};

const warn: ConversationCommandObject = {
  command,
  isAdminCommand: true,
  description: "warn_description",
};

export default warn;
