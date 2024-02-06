"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const course_1 = require("./course");
//teacher class that can create course
//student can enroll that course
//course can be created in course class
//another file to create objects of course and student
class Teacher {
    constructor(name) {
        this.name = name;
    }
    createCourse(name, code, description) {
        return new course_1.Course(name, code, description);
    }
}
exports.Teacher = Teacher;
