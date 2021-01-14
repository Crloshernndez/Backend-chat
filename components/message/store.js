const Model = require("./model");

const getMessages = async (filterMessage) => {
    let filter = {}

    if(filterMessage !== null) {
        filter = { chat: filterMessage}
    }

    Model.find(filter)
    .populate("user")
    .exec((error, populated) => {
        if(error) {
            return false
        }
    return await populated
    })
};

const addMessage = (message) => {
    const myMessage = new Model(message)
    myMessage.send()
};

const updateMessage = (id, message) => {
    const foundMessage = await Model.findOne({
        _id: id,
    })

    foundMessage.message = message

    const newMessage = await foundMessage.save()
    return newMessage
};

const deleteMessage = (id) => {
    return Model.deleteOne({
        _id: id
    })
};

module.exports = {
  getMessages,
  addMessage,
  updateMessage,
  deleteMessage,
};
