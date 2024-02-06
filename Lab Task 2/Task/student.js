"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, id) {
        this.name = name;
        this.studentId = id;
        this.coursesEnrolled = [];
    }
    enroll(course) {
        this.coursesEnrolled.push(course);
        console.log(`${this.name} enrolled in ${course.getCourseDetails()}`);
    }
}
exports.Student = Student;
