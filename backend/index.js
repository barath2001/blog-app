import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello world" });
});

const startServer = async () => {
  try {
    // database connection
  } catch (error) {
    console.log(error);
  }
};

startServer();

app.listen(8080);
