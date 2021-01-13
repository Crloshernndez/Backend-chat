const express = require("express");
const config = require("./config");

// inicializacion de express
const app = express();

app.listen(config.port, () => {
  console.log(`App is working on ${config.host}:${config.port}`);
});
