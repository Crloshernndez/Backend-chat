const express = require("express");
const config = require("./config");

// inicializacion de express
const app = express();

//SERVER
app.listen(config.port, () => {
  console.log(`App is working on ${config.host}:${config.port}`);
});

// ROUTES
const router = require("./network/routes");
router(app);
