import { getMessages } from './api';

export const filterMessage = async (id) => {
  // get all messages by axios
  const messages = await getMessages();
  const theMessage = messages.data.filter((message) => message.id === id);
  return theMessage;
};

export const deleteMessageFrom = (messages, id) => messages.filter((message) => message.id !== id);
