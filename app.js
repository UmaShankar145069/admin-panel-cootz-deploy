const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const hbs = require("handlebars");

const app = express();
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const authLoginRoute = require("./routes/login");
const profileRoute = require("./routes/profile");
const contestRoute = require("./routes/contest");
const referalRoute = require("./routes/myreferal");
const logoutRoute = require("./routes/logout");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Database Connection

// const { MONGO_URI } = process.env;

// exports.connect = () => {
// Connecting to the database
mongoose
  .connect(
    "mongodb+srv://umashankar:145069@codetube.s7bi4.mongodb.net/codeTube?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
// };

app.use("/login", authLoginRoute);
app.use("/profile", auth, profileRoute);
app.use("/contest", auth, contestRoute);
app.use("/referal", auth, referalRoute);
app.use("/logout", auth, logoutRoute);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
