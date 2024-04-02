type StudentProps = {
    name: string;
    marks: number;
};

function Student({ name, marks }: StudentProps) {
    return (
        <tr>
            <td>{name}</td>
            <td>{marks}</td>
        </tr>
    );
}

export default Student;