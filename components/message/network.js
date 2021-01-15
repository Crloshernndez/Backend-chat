const express = require("express");
const responses = require("../../network/responses");
const controller = require("./controller");

const router = express.Router();

router.get("/", getMessages);
router.post("/", addMessage);
router.patch("/:id", updateMessage);
router.delete("/:id", deleteMessage);

function getMessages(req, res) {
  const filterMessage = req.query.chat || null;

  controller
    .getMessages(filterMessage)
    .then((messageList) => {
      responses.success(req, res, messageList, 200);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 500);
    });
}
function addMessage(req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message)
    .then((message) => {
      responses.success(req, res, message, 201);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 400);
    });
}
function updateMessage(req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((message) => {
      responses.success(req, res, message, 200);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 500);
    });
}
function deleteMessage(req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      responses.success(req, res, `message ${req.params.id} delated`);
    })
    .catch((e) => {
      responses.error(req, res, e.message, 500);
    });
}

module.exports = router;
