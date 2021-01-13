const express = require("express");
const response = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

const getUsers = (req, res) => {
  const filterUser = req.query.name || null;

  controller
    .getUsers(filterUser)
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, 500);
    });
};

const addUser = (req, res) => {
  controller
    .addUser(req.body.name)
    .then((newUser) => {
      response.success(req, res, newUser, 201);
    })
    .catch((e) => {
      response.error(req, res, e.message, 500);
    });
};

const updateUser = (req, res) => {
  controller
    .updateUser(req.params.id, req.body.name)
    .them((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, 500);
    });
};

const deleteUser = (req, res) => {
  controller
    .deleteUser(req.params.id)
    .then(() => {
      response.success(req, res, `user${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      response.error(req, res, e.message, 500);
    });
};
