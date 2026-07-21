import express from "express";
import os from "os";

const app = express();

app.set("trust proxy", 1);

app.get("/api", (req, res) => {
  res
    .status(200)
    .send({
      success: true,
      hostname: os.hostname(),
      message: "Server is running",
    });
});
app.get("/api/greet", (req, res) => {
  res
    .status(200)
    .send({
      success: true,
      hostname: os.hostname(),
      message: "Hello from server",
    });
});
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .send({
      success: true,
      hostname: os.hostname(),
      message: "Server is Health",
    });
});

app.listen(3000, () => console.log("Server started"));
