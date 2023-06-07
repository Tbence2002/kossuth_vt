const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3001", "http://localhost:3000"],
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  key: "userId",
  secret: "ADUIOVHNAI12OAUIOFBUIOAFN3065",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 99999999
  },
}))

const db = require("./models");

const NewsRouter = require("./routes/News");
app.use("/news", NewsRouter);

const MembersRouter = require("./routes/Members");
app.use("/members", MembersRouter);

const AdminsRouter = require("./routes/Admins");
app.use("/admin", AdminsRouter);

db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
});
