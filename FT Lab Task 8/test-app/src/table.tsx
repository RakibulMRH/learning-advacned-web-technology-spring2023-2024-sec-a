import Student from "./student";

function Table() {
    const students = [
        { name: 'Student 1', marks: 85 },
        { name: 'Student 2', marks: 90 },
        { name: 'Student 3', marks: 95 }
    ];

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} name={student.name} marks={student.marks} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;