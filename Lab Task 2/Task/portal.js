"use strict";
//portal where teacher and course and student can be created
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const teacher_1 = require("./teacher");
const teacher = new teacher_1.Teacher("Mr. Smith");
const course = teacher.createCourse("Math", "M101", "Introduction to Mathematics");
const student = new student_1.Student("Alice", 1);
student.enroll(course);
