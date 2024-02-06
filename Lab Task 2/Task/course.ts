export class Course {
    private courseName: string;
    private courseCode: string;
    private courseDescription: string;

    constructor(name: string, code: string, description: string) {
        this.courseName = name;
        this.courseCode = code;
        this.courseDescription = description;
    }

    getCourseDetails(): string {
        return `${this.courseName} (${this.courseCode}): ${this.courseDescription}`;
    }
}