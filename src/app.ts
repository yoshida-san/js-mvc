import express from "express";
import userController from "./controller/userController";
const app: any = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req: express.Request, res: express.Response) => {
    res.render("./home.ejs");
});
app.get("/user", userController);

app.use((req: express.Request, res: express.Response) => {
    res.status(404);
    res.render("./404.ejs");
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
export default app;