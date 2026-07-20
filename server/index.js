import express from "express";

const app = express();

app.set("trust proxy", 1);

app.get("/api", (req, res) => {
  res.status(200).send({ success: true, message: "Server is running" });
});
app.get("/api/greet", (req, res) => {
  res.status(200).send({ success: true, message: "Hello from server" });
});
app.get("/api/health", (req, res) => {
  res.status(200).send({ success: true, message: "Server is Health" });
});

app.listen(3000, () => console.log("Server started"));
