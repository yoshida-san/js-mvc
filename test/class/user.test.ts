import User from "../../src/model/user";

describe("Userクラスのテスト（初期化あり、正常系）", () => {
    const u = new User("Hoge", "Piyo", "1984/4/4", 0, true);
    test("名前取得", () => {
        expect(u.getFullName()).toBe("Hoge Piyo");
    });
    test("年齢算出", () => {
        expect(u.getAge()).toBe(35);
    });
    test("性別取得", () => {
        expect(u.getSex()).toBe("男性");
    });
    test("アクティベート取得", () => {
        expect(u.isActivate()).toBe(true);
    });
});

describe("Userクラスのテスト（初期化なし、正常系）", () => {
    const u = new User();
    test("名前取得", () => {
        expect(u.getFullName()).toBe(" ");
    });
    test("年齢算出", () => {
        expect(u.getAge()).toBe(19);
    });
    test("性別取得", () => {
        expect(u.getSex()).toBe("男性");
    });
    test("アクティベート取得", () => {
        expect(u.isActivate()).toBe(false);
    });
});