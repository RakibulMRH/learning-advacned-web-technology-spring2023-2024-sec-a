import { Course } from './course'; // Import the 'Course' class
//teacher class that can create course
//student can enroll that course
//course can be created in course class
//another file to create objects of course and student

export class Teacher {
    private _name: string;
    private _email: string;
    private _course: Course;

    constructor(name: string, email: string, course: Course) {
        this._name = name;
        this._email = email;
        this._course = course;
    }

    createCourse() {
        let string course = this._course;
        let c = new Course(course.name, course);
    }

    get course() {
        return this._course;
    }
}