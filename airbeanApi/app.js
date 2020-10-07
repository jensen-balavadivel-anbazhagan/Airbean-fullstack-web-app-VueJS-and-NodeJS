const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const host = "localhost";
var http = require('http').createServer(app);
const path = require("path");

const menuRouter = require("./routes/menu");
const orderRouter = require("./routes/orderHistory");
const userRouter = require("./routes/users");

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/user", userRouter);
app.use("/menu", menuRouter);
app.use("/orderhistory", orderRouter);

const server = http.listen(port, host, () => console.log(`Airbean api listening on port ${port}!`));

module.exports = app;