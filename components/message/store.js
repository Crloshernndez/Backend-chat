const Model = require("./model");

const getMessages = (filterMessage) => {
  return new Promise((resolve, reject) => {
    let filter = {};

    if (filterMessage !== null) {
      filter = { chat: filterMessage };
    }

    Model.find(filter)
      .populate("user")
      .populate("chat")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
};

const addMessage = (message) => {
  const myMessage = new Model(message);
  return myMessage.save();
};

const updateMessage = async (id, message) => {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
};

const deleteMessage = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  getMessages,
  addMessage,
  updateMessage,
  deleteMessage,
};
