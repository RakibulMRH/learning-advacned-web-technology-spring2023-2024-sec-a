//student that can enroll in course

export class student {
    private _name: string;
    private _email: string;
    private _course: string; // Add this line

    constructor(name, email) {
        this._name = name;
        this._email = email;
    }
    enrollCourse(course) {
        this._course = course;
    }
    get course() {
        return this._course;
    }
}