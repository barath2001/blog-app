import express from "express";
import connectDB from "./mongodb/connect.js";
import blogRouter from "./routes/blog.routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Server is running!" });
});

app.use("/api/v1/blogs", blogRouter);

const startServer = () => {
  try {
    connectDB("mongodb://localhost:27017/blogApp");

    app.listen(8080, () => {
      console.log("Server started in http://localhost:8080/");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
