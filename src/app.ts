import express from "express";
import hogeController from "./controller/hogeController";
const app = express();

app.set("view engine", "ejs");
app.set('views', './src/views')

class Foo {
    doPrivatefunc(req: express.Request, res: express.Response, next: Function): void {
        this.myFunc();
        next();
    }

    private myFunc(): void {
        console.log("myFunc");
    }
}
let foo = new Foo();

let bar = (req: express.Request, res: express.Response, next: Function): void => {
    console.log("bar");
    next();
}

let piyo = (req: express.Request, res: express.Response, next: Function): void => {
    console.log("piyo");
    next();
}

app.use(foo.doPrivatefunc.bind(foo));
app.use(bar);

app.get("/", (req: express.Request, res: express.Response, next: Function): void => {
    res.send("Hello world!");
});
app.get("/hoge", hogeController);
app.get("/hoge", (req: express.Request, res: express.Response, next: Function): void => {
    console.log("next 1 !!");
    next();
});
app.get("/hoge", (req: express.Request, res: express.Response, next: Function): void => {
    console.log("next 2 !!");
    next();
});
app.get("/hoge", piyo);

app.listen(3000, (): void => {
    console.log("listening on port 3000!");
});
export default app;