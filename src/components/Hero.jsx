import React from "react";
import Counter from "./Counter";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiLayers, FiLayout, FiServer, FiGlobe } from "react-icons/fi";
import { motion } from "motion/react";
import Ept from "./Ept";
import { Link } from "react-router-dom";
import { expreienceData, projectData, toolsData } from "../dummyData/data";
import WhatsappButton from "./WhatsappButton";

function Hero() {
  return (
    <div className=" mt-14">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="head text-center lg:text-left flex flex-col justify-center items-center lg:items-start"
      >
        <h1 className="lg:text-[4rem] text-[2.8rem] font-bold leading-tight max-w-[800px]">
          FULL STACK DEVELOPER <br />
          <span className="text-[#474649]">& SAAS BUILDER</span>
        </h1>

        <p className="text-[#818181] max-w-[550px] text-[1.2rem] py-4">
          I build scalable SaaS platforms, fintech systems, and deploy
          production-ready applications. Specialized in backend architecture,
          APIs, and real-time systems.
        </p>

        <div className="flex gap-4 my-4">
          <Link
            to="/project"
            className="bg-[#F46C38] px-4 py-2 rounded-lg text-white"
          >
            View Projects
          </Link>

          <a
            href="https://wa.me/919649730196"
            target="_blank"
            className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black duration-300"
          >
            Hire Me 🚀
          </a>

          <a
            href="/ArbazKhanResume.pdf"
            className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black duration-300"
          >
            Resume
          </a>
        </div>

        <Counter />
      </motion.div>

      <div className="my-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-[#F46C38] p-6 rounded-2xl w-full"
        >
          <FiServer className="text-3xl mb-4 w-fit" />
          <h3 className="text-xl font-semibold">Backend & SaaS Systems</h3>
          <p className="text-sm mt-2 ">
            Node.js, Express, Prisma, MongoDB, API Development, Authentication,
            Email Servers, Fintech Systems
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-[#C5FF41] text-black p-6 rounded-2xl w-full"
        >
          <FiGlobe className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold">Deployment & Production</h3>
          <p className="text-sm mt-2">
            Vercel, VPS, Domain & DNS Setup, Email Infrastructure, Production
            Optimization
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-[#151312] border p-6 rounded-2xl w-full"
        >
          <FiLayout className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold">Frontend & UI</h3>
          <p className="text-sm mt-2">
            React.js, Tailwind CSS, Next.js, Responsive UI/UX Design
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="bg-[#151312] border p-6 rounded-2xl w-full"
        >
          <FiLayers className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold">Freelance Services</h3>
          <p className="text-sm mt-2">
            Available for freelance & contract work. I help startups build SaaS
            products, dashboards, and APIs.
          </p>
        </motion.div>
      </div>

      <Ept projectData={projectData} variant="project" />
      <Ept projectData={expreienceData} variant="experience" />
      <Ept projectData={toolsData} variant="tools" />

      <WhatsappButton />
    </div>
  );
}

export default Hero;
