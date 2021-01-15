const express = require("express");
const responses = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/", getChats);
router.post("/", addChat);
router.delete("/:id", deleteChat);

function getChats(req, res) {
  const filterChat = req.query.id || null;

  controller
    .getChats(filterChat)
    .then((chatList) => {
      responses.success(req, res, chatList, 200);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 500);
    });
}

function addChat(req, res) {
  controller
    .addChat(req.body.users)
    .then((data) => {
      responses.success(req, res, data, 201);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 500);
    });
}

function deleteChat(req, res) {
  controller
    .deleteChat(req.params.id)
    .then(() => {
      responses.success(req, res, `chat ${req.params.id} delated`);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 500);
    });
}
