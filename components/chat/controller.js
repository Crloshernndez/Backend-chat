const store = require("./store");

const getChats = async (filterChat) => {
  const chats = await store.getChats(filterChat);
  return chats;
};

const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users || users.length < 2) {
      reject("Invalid Amound Of Users");
      return false;
    }

    const chat = {
      users: users,
    };

    store.addChat(chat);
    resolve(chat);
  });
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
