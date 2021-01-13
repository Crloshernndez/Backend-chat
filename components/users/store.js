const Model = require("./model");

const getUsers = (filterUser) => {
  let filter = {};

  if (filterUser !== null) {
    filter = { name: new RegExp(filterUser, "i") };
  }

  const users = Model.find(filter);
  return users;
};

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

const updateUser = async (id, name) => {
  const foundUser = await Model.findOne({
    _id: id,
  });

  foundUser.name = name;

  const updatedUser = await foundUser.save();
  return updatedUser;
};

const deleteUser = async (id) => {
  return await Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
