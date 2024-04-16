import React from 'react';
import './Skills.module.css';

const Skills: React.FC = () => {
  return (
    <section style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Development Skills</h2>
      <table border={0} style={{ margin: "0 auto" }}>
        <th><div>
        <h3>Languages</h3>
        <p>TypeScript | JavaScript | HTML | PHP | CSS | Java | C/C++ | SQL | MySQL</p>
        </div>
        </th>
        <tr> </tr>
        <th>
        <div>
          <h3>Frameworks</h3>
          <p>NodeJS | NestJS | ASP.NET | .NET Framework</p>
        </div></th></table>
        <h3>Skill Highlights</h3>
        <p style={{ marginBottom: "0px" }}>Project management</p>
        <p style={{ marginBottom: "0px" }}>Strong decision maker</p>
        <p style={{ marginBottom: "0px" }}>Complex problem solver</p>
        <p style={{ marginBottom: "0px" }}>Creative design</p>
        <p style={{ marginBottom: "0px" }}>Innovative</p>
        <p style={{ marginBottom: "0px" }}>Service-focused</p>
        <p style={{ marginBottom: "0px" }}>Quick learner</p>
    </section>
  );
};

export default Skills;