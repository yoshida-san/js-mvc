import express from "express";
import hogeController from "./controller/hogeController";
const app = express();

app.set("view engine", "ejs");
app.set('views', './src/views')

app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.get("/hoge", hogeController);

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
export default app;