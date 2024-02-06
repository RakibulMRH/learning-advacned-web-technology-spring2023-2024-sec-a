//student that can enroll in course
import { Course } from './course';

export class Student {
    private name: string;
    private studentId: number;
    private coursesEnrolled: Course[];

    constructor(name: string, id: number) {
        this.name = name;
        this.studentId = id;
        this.coursesEnrolled = [];
    }

    enroll(course: Course): void {
        this.coursesEnrolled.push(course);
        console.log(`${this.name} enrolled in ${course.getCourseDetails()}`);
    }
}