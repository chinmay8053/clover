import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("middleware Time: ", Date.now());
  next();
});

app.use("/request", (req, res, next) => {
  console.log("Request type: ", req);
  next();
});

app.post("/", (req, res) => {
  console.log("POst home routes", req.body);
  res.send(JSON.stringify(req.body)).status(200);
});

app.get("/request", (req, res) => {
  console.log("GET request route");

  res.send("ok").status(200);
});

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
