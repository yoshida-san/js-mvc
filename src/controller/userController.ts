import * as Express from "express";
import User from "../model/user";

export default function userController(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const me = new User("Yoshida", "Satoshi", "1984/03/09", 0, true);
    const data: object = {
        title: "userController",
        contents: "Hi.",
        user: me.toJson()
    }
    res.render("./user.ejs", data);
}
