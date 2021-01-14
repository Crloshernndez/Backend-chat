const store = require("./store");

const getUsers = async (filterUser) => {
  const users = await store.getUsers(filterUser);
  return users;
};
const addUser = async (name) => {
  if (!name) {
    console.log("Invalid Name");
    return false;
  }

  const user = {
    name,
  };

  const newUser = await store.addUser(user);
  return newUser;
};
const updateUser = async (id, name) => {
  if (!id || !name) {
    console.log("Invalid Data");
    return false;
  }

  const result = await store.updateUser(id, name);

  return result;
};

const deleteUser = (id) => {
  if (!id) {
    console.log("Invalid Id");
    return false;
  }

  return store.deleteUser(id);
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
