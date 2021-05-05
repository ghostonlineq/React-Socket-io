const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.PORT || 9000;
// const socketport = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const urlencoded = require("body-parser");
const cors = require("cors");
const socketIo = require("socket.io");
const http = require("http");

//const WebSocket = require("ws");

//socket server port setup
app.set("port", PORT);
const serverSocket = http.createServer(app);
serverSocket.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

//socket cors
const io = socketIo(serverSocket, {
  cors: {
    origin: "*",
  },
});
//socket io setup
// const io = socketIo(serverSocket);
//Connect
io.on("connection", (socket) => {
  console.log("Socket connection");

  socket.on("disconnect", () => {
    console.log("Socket disconnect");
  });
  socket.on("sent-message", function (message) {
    io.sockets.emit("new-message", message);
  });
});

//show test
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

//Database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_register",
});

db.connect(function (error) {
  if (error) {
    console.log(error);
  }
  console.log("db connect");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM register";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/gender", (req, res) => {
  const sqlGender = "SELECT * FROM gender";
  db.query(sqlGender, (err, result) => {
    res.send(result);
  });
});

app.get("/api/status", (req, res) => {
  const sqlStatus = "SELECT * FROM status_user";
  db.query(sqlStatus, (err, result) => {
    res.send(result);
  });
});

app.get("/api/titlename", (req, res) => {
  const sqlStatus = "SELECT * FROM titlename";
  db.query(sqlStatus, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  // const name = req.body.name;
  var Datapost = {
    Name: req.body.name,
    Password: req.body.password,
    Email: req.body.email,
    Phone: req.body.phone,
    Gender: req.body.gender,
    Titlename: req.body.titlename,
    Status: req.body.status,
  };
  // const password = req.body.password;
  // const email = req.body.email;
  // const phone = req.body.phone;
  // const gender = req.body.gender;
  // const titlename = req.body.titlename;
  // const status = req.body.status;

  // console.log(req.body);
  var sqlInsert = "INSERT INTO register SET ?";
  db.query(sqlInsert, Datapost, function (err, result) {
    console.log(err);
  });

  // const sqlInsert =
  //   "INSERT INTO register (Name, Password, Email, Phone,Gender,TitleName,Status) VALUES ('?','?','?','?',?,?,?)";
  // db.query(
  //   sqlInsert,

  //   (err, result) => {
  //     console.log(result);
  //   }
  // );
});
