const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  chat: String,
  user: {
    type: Schema.ObjectId,
    ref: "user",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("messages", mySchema);

module.exports = model;
