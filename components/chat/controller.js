const store = require("./store");

const getChats = async (filterChat) => {
  const chats = await store.getChats(filterChat);
  return chats;
};

const addChat = async (users) => {
  if (!users || users.length < 2) {
    console.log("Invalid Amound Of Users");
    return false;
  }

  const chat = {
    users: users,
  };

  const newChat = await store.addChat(users);
  return newChat;
};
const deleteChat = (id) => {
  if (!id) {
    console.log("Invalid Id");
    return false;
  }

  return store.deleteChat(id);
};

module.exports = {
  getChats,
  addChat,
  deleteChat,
};
