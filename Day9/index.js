const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");
const { logreqres } = require("./middlewares/index");
const PORT = 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(logreqres("log.txt"));

//MongoDB connection
connectMongoDB("mongodb://127.0.0.1:27017/myTests");

//routers
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started at Port :${PORT}`);
});
