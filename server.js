const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static("public"));
app.use("/scripts",express.static(`${__dirname}/node_modules/web3.js-browser/build/`));

// setup ejs
app.set("view engine", "ejs");
app.set("views", "./views");

//socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(3003);

//config body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


//config mongooseDB
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.MONGOOSE_AUTHENTICATION_USER}:${process.env.MONGOOSE_AUTHENTICATION_PASSWORD}@cluster0.coerd.mongodb.net/${process.env.MONGOOSE_DATABASE_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to mongoDB");
  }
);

// respond with "hello world" when a GET request is made to the homepage
require("./controllers/game")(app, io);
