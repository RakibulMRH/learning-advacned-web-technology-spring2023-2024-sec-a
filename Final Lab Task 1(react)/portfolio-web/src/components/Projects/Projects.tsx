import React from 'react'; 

const Projects: React.FC = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ul style={{ listStyleType: "none" }}>

        <li>
          <h3>Smart AD Management</h3>
          <p>Utilized NestJS, TypeScript, PostgreSQL to engineer a robust backend, ensuring seamless API functionality, and crafted Swagger documentation for clear API understanding along with Product Requirement Documents (PRD).</p>
        </li>
        <li>
          <h3>Zero Hunger</h3>
          <p>A small app for a food delivery system using ASP.NET with DB first Entity Framework.</p>
        </li>
        <li>
          <h3>Darussalam Institutional Platform</h3>
          <p>Spearheaded the development of an all-encompassing educational platform using XAMPP and PHP, adhering to the MVC architecture for structured development. Implemented secure payment gateways and user-friendly interfaces using CSS.</p>
        </li>
        <li>
          <h3>Filling Station Management System</h3>
          <p>Developed using .NET Framework and C#, leveraging the power of Microsoft Azure for robust database management with Oracle serving as the database backend.</p>
        </li>
        <li>
          <h3>Hospital Management System</h3>
          <p>Designed and implemented using JVM and Java language, with Oracle as the database, ensuring seamless data management and system performance.</p>
        </li>
        <li>
          <h3>Metro Rail Graphics Project</h3>
          <p>Developed using C++, incorporating Open GL module for advanced graphics rendering.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;