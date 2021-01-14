const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const db = require("./db");

// inicializacion de express
const app = express();

app.use(bodyParser.json());

// Connect with db
db(config.dbUrl);

//SERVER
app.listen(config.port, () => {
  console.log(`App is working on ${config.host}:${config.port}`);
});

// ROUTES
const router = require("./network/routes");
router(app);
