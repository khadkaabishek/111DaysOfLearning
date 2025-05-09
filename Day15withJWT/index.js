const express = require("express");
const app = express();
const PORT = 3000;
const { handleMongoConnection } = require("./connection");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const home = require("./routes/home");
const cookieParser = require("cookie-parser");
const { forceAuthentication, checkAuth } = require("./controller/home");
const path = require("path");
const { json } = require("stream/consumers");

handleMongoConnection("mongodb://127.0.0.1:27017/Authentication")
  .then(console.log(`MongoDB connection Successful`))
  .catch((err) => {
    console.log(`Caught Error :${err}`);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/", forceAuthentication, checkAuth, home);

app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
