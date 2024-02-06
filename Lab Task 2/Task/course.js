"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(name, code, description) {
        this.courseName = name;
        this.courseCode = code;
        this.courseDescription = description;
    }
    getCourseDetails() {
        return `${this.courseName} (${this.courseCode}): ${this.courseDescription}`;
    }
}
exports.Course = Course;
