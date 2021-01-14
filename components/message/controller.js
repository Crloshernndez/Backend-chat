const store = require("./store");

const getMessages = async (filterMessage) => {
  const messages = await store.getMessages(filterMessage);
  return messages;
};

const addMessage = async (chat, user, message) => {
  if (!chat || !user || !message) {
    console.log("missing message or chat or user");
    return false;
  }

  const fullMessage = {
    chat: chat,
    user: user,
    message: message,
    date: new Date(),
  };

  message = await store.addMessage(fullMessage);
  return message;
};

const updateMessage = async (id, message) => {
  if (!id || !message) {
    console.log("missing id or message");
    return false;
  }

  const messageUpdated = await store.updateMessage(id, message);
  return messageUpdated;
};

const deleteMessage = async (id) => {
  if (!id) {
    console.log("Invalid Id");
    return false;
  }

  const messageDeleted = await store.deleteMessage(id);
  return messageDeleted;
};

module.exports = {
  getMessages,
  addMessage,
  updateMessage,
  deleteMessage,
};
