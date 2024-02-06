//course class

export class Course {
    private _name: string;
    private _code: string;

    constructor(name: string, code: string) {
        this._name = name;
        this._code = code;
    }

    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }
}