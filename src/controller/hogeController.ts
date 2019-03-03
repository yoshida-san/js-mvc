import * as Express from "express";
export default function hogeController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    let data = {
        "title": "hogeController",
        "contents": "hoge text."
    }
    res.render("./hoge.ejs", data);
    next();
}