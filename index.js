import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/request", (req, res, next) => {
  console.log("Request type: ", req.method);
  next();
});

app.get("/", (req, res) => {
  console.log("GET home route");
  res.send("ok").status(200);
});

app.get("/request", (req, res) => {
  console.log("GET request route");
  res.send("ok").status(200);
});

app.listen("3001", () => {
  console.log("listening on http://localhost:3001");
});
