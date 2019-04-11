export default class User {

    private _firstName: string;
    private _lastName: string;
    private _birthday: string;
    private _sex: number;
    private _activate: boolean;

    public constructor(firstName: string = "", lastName: string = "", birthday: string = "2000/01/01", sex: number = 0, activate: boolean = false) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._sex = sex;
        this._activate = activate;
    }

    public setFirstName = (arg: string): void => { this._firstName = arg; }
    public setLastName = (arg: string): void => { this._lastName = arg; }
    public setBirthday = (arg: string): void => { this._birthday = arg; }
    public setSex = (arg: number): void => { this._sex = arg; }
    public setActivate = (arg: boolean): void => { this._activate = arg; }

    private splitBirthday = (birthday: string): number[] => birthday.split("/").length > 1 ? birthday.split("/").map((s) => parseInt(s)) : birthday.split("-").map((s) => parseInt(s));

    private verifyBirthday = (birthday: string): boolean => {
        const dateFormat: RegExp = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if (!birthday.match(dateFormat)) return false;
        const splitedDate: number[] = this.splitBirthday(this._birthday);
        if (splitedDate.length !== 3) return false;
        const ListOfDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (splitedDate[1] === 1 || splitedDate[1] > 2) {
            if (splitedDate[2] > ListOfDays[splitedDate[1] - 1]) return false;
        }
        if (splitedDate[1] == 2) {
            const leapYearFlag = (!(splitedDate[0] % 4) && splitedDate[0] % 100) || !(splitedDate[0] % 400) ? true : false;
            if ((leapYearFlag == false) && (splitedDate[2] >= 29)) return false;
            if ((leapYearFlag == true) && (splitedDate[2] > 29)) return false;
        }
        return true;
    }

    public getFullName = (): string => `${this._firstName} ${this._lastName}`;
    public getAge = (): number => {
        if (!this.verifyBirthday(this._birthday)) return -1;
        const splitedBirthday: number[] = this.splitBirthday(this._birthday);
        const d = new Date();
        const now = parseInt(d.getFullYear().toString() + ('0' + (d.getMonth() + 1).toString()).slice(-2) + ('0' + d.getDate().toString()).slice(-2));
        const birthday = parseInt(('000' + splitedBirthday[0].toString()).slice(-4) + ('0' + (splitedBirthday[1].toString())).slice(-2) + ('0' + (splitedBirthday[2].toString())).slice(-2));
        return Math.floor((now - birthday) / 10000);
    }

    public getSex = (): string => {
        switch (this._sex) {
            case 0:
                return "男性";
            case 1:
                return "女性";
            default:
                return "";
        }
    }

    public isActivate = (): boolean => this._activate;

    public toJson = (): object => {
        return {
            name: this.getFullName(),
            birthday: this._birthday,
            age: this.getAge(),
            sex: this.getSex(),
            activate: this.isActivate()
        }
    }

}
