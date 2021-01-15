const Model = require("./model");

const getChats = (filterChat) => {
  return new Promise((resolve, reject) => {
    let filter = {};

    if (filterChat !== null) {
      filter = { chat: filterChat };
    }

    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
};

const addChat = (chat) => {
  const myChat = new Model(chat);
  return myChat.save();
};

const deleteChat = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  getChats,
  addChat,
  deleteChat,
};
