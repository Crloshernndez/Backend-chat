// create success answer
exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || "";

  res.status(statusCode).send({
    error: false,
    status: status,
    message: statusMessage,
  });
};

// create error answer
exports.error = (req, res, message, status) => {
  let statusCode = status || 500;
  let statusMessage = message || "Internal Server Error";

  res.status(statusCode).send({
    error: true,
    status: status,
    message: statusMessage,
  });
};