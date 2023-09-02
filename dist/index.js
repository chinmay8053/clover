"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});
app.use("/request", (req, res, next) => {
    console.log("Request type: ", req);
    next();
});
app.get("/", (req, res) => {
    console.log("GET home routes");
    res.send("ok").status(200);
});
app.get("/request", (req, res) => {
    console.log("GET request route");
    res.send("ok").status(200);
});
app.listen(PORT, () => {
    console.log("listening on ", PORT);
});
