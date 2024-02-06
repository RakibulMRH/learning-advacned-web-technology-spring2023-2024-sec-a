//portal where teacher and course and student can be created

import {Course} from'./course';
import {Student} from'./student';
import {Teacher} from './teacher';

const teacher = new Teacher("Mr. Smith");
const course = teacher.createCourse("Math", "M101", "Introduction to Mathematics");
const student = new Student("Alice", 1);


student.enroll(course);