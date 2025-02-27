import React from "react";
import Ept from "../components/Ept";

function Experience() {
  return (
    <div className="pt-12">
      <Ept
        // expreience
        projectData={[
          {
            id: 1,
            title: "Kingfish Logistics",
            companyName: "MD WebSoft",
            companyLocation: "Jhotwara, Jaipur (Raj.), India",
            role: "Front-End Developer (Intern) | MD WebSoft | 45 Days.",
            tagLine:
              "Developed the Kingfish Logistics website using React and Tailwind CSS, ensuring a responsive and visually appealing UI. Worked on bug fixing, optimization, and Git version control while collaborating with the team to meet project deadlines. 🚀",
            link: "#",
            time: "45 Days Internship",
          },
          {
            id: 2,
            title: "Todo List API with Authentication",
            companyName: "Project Experience",
            role: "Backend Developer",
            tagLine:
              "Developed a secure RESTful API using Express.js, MongoDB, and Nodemailer for authentication and email notifications. Implemented JWT-based authentication, user management, and task operations.",
            link: "#",
          },
          {
            id: 3,
            title: "Blog Web Application",
            companyName: "Project Experience",
            role: "Full-Stack Developer",
            tagLine:
              "Developed a fully responsive blog website with a modern UI/UX. Implemented user authentication, content management, and interactive features using React, Node.js, Express.js, and MongoDB.",
            link: "#",
          },
        ]}
      />
    </div>
  );
}

export default Experience;
