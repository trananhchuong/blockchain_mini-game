const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

//socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(3003);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


// respond with "hello world" when a GET request is made to the homepage
require("./controllers/game")(app, io);
