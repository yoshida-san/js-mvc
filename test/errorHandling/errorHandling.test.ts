import User from "../../src/model/user";

describe("Userクラスの異常系テスト", () => {
    const u = new User("🙆", "🙈", "1984/4/0", 3);
    test("名前取得", () => {
        expect(u.getFullName()).toBe("🙆 🙈");
    });
    test("年齢算出", () => {
        expect(u.getAge()).toBe(-1);
    });
    test("性別取得", () => {
        expect(u.getSex()).toBe("");
    });
    test("アクティベート取得", () => {
        expect(u.isActivate()).toBe(false);
    });
});
