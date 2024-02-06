import { Course } from './course'; 
//teacher class that can create course
//student can enroll that course
//course can be created in course class
//another file to create objects of course and student

export class Teacher {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    createCourse(name: string, code: string, description: string): Course {
        return new Course(name, code, description);
    }
}