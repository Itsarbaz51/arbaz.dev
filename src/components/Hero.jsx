import React from "react";
import Counter from "./Counter";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiLayers, FiLayout } from "react-icons/fi";
import { motion } from "motion/react";
import Ept from "./Ept";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="overflow-hidden mt-14">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="head text-center lg:text-left flex flex-col justify-center items-center lg:items-start"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:text-[4rem] text-[3rem] font-bold leading-tight max-w-[800px] xl:w-fit"
        >
          WEB DEVELOPER <br />
          <motion.li
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#474649] list-none"
          >
            & WEB DESIGNER{" "}
          </motion.li>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[#818181] max-w-[550px] text-[1.3rem] py-4"
        >
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </motion.p>
        <Counter />
      </motion.div>
      <div className="my-16 flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:justify-between">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[20rem] bg-[#F46C38] text-[2rem] p-5 rounded-xl font-semibold"
        >
          <FiLayers className="my-4" />
          <div className="flex justify-end flex-col items-end lg:space-y-7">
            <span className="leading-8">
              DYNAMIC ANIMATION, REACTJS DESIGN{" "}
            </span>
            <span className="hover:bg-white my-3 border rounded-lg duration-700 hover:text-[#F46C38]">
              <Link to="/experience">
                <IoIosArrowRoundForward />{" "}
              </Link>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-[19.8rem] sm:w-[24rem] lg:w-[28rem] bg-[#C5FF41] text-[2rem] p-5 rounded-xl font-semibold text-black"
        >
          <FiLayout className="my-4" />
          <div className="flex justify-center flex-col items-end sm:space-y-10">
            <span className="leading-8">
              REACTJS, FIGMA, TAILWINDCSS, EXPRESSJS
            </span>
            <span className="hover:bg-black my-3 border border-black rounded-lg duration-700 hover:text-white">
              <Link to="/project">
                <IoIosArrowRoundForward />{" "}
              </Link>
            </span>
          </div>
        </motion.div>
      </div>
      <Ept
        // project
        projectData={[
          // {
          //   id: 1,
          //   title: "Kingfish logistic",
          //   img: "https://portfolio-01-kappa.vercel.app/_next/image?url=%2Fkingfish.png&w=1200&q=75",
          //   tagLine: "using tools React, Tailwind CSS with Responsive.",
          //   link: "https://www.kingfishlogistics.in",
          // },
          {
            id: 2,
            title: "Blog Website",
            img: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
            tagLine:
              "Built with MERN Stack, Redux Toolkit, and Tailwind CSS. Fully responsive design with authentication and content management.",
            link: "#",
          },
          {
            id: 3,
            title: "Todo List API with Authentication",
            img: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
            tagLine:
              "Developed a secure RESTful API using Express.js, MongoDB, and NodeMailer for authentication and email notifications.",
            link: "#",
          },
        ]}
      />
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
            link: "https://www.kingfishlogistics.in/",
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
      <Ept
        // tools
        projectData={[
          {
            id: 1,
            title: "Tailwind CSS",
            tagLine: "CSS Framework",
            toolImg: "/tools/tailwind.jpg",
            link: "#",
          },
          {
            id: 2,
            title: "React.js",
            tagLine: "JavaScript Library",
            toolImg: "/tools/react.png",
            link: "#",
          },
          {
            id: 3,
            title: "Figma",
            tagLine: "Design Tool",
            toolImg: "/tools/figma.avif",
            link: "#",
          },
          {
            id: 4,
            title: "HTML",
            tagLine: "Markup Language",
            toolImg: "/tools/html.jpg",
            link: "#",
          },
        ]}
      />
    </div>
  );
}

export default Hero;
