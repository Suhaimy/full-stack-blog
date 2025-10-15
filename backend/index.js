import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRounter from "./routes/comment.route.js";

const app = express();

app.get("/test", (req, res) => {
  res.status(200).send("it works!");
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRounter);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running");
});
