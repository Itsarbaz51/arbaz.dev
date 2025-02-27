import React from "react";
import { GoHome } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { RxResume } from 'react-icons/rx';
import { LiaEdit } from "react-icons/lia";
import { TbTool } from "react-icons/tb";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-fit flex flex-col items-center justify-center fixed md:relative bottom-0 md:top-0 z-50"
    >
      <motion.ul className="flex items-center justify-center space-x-[33px] px-[21px] w-fit lg:bg-[#FFFFFF] lg:bg-opacity-5 bg-[#F46C38] text-[#FFFFFF] lg:my-7 my-2 rounded-2xl py-3 relative ">
        {[
          { icon: GoHome, name: "Home", path: "/" },
          { icon: GoFileDirectory, name: "Project", path: "/project" },
          { icon: MdWorkOutline, name: "Experience", path: "/experience" },
          { icon: TbTool, name: "Tools", path: "/tools" },
          // { icon: LiaEdit, name: "Edit", path: "/edit" },
          { icon: RxResume, name: "Resume", path: "/ArbazResume.pdf", newTab: true },
        ].map(({ icon: Icon, name, path , newTab}, index) => (
          <Link to={path} key={index} target={newTab ? "_blank" : "_self"}>
            <motion.li
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="cursor-pointer group flex flex-col justify-center items-center "
            >
              <Icon className="size-6" />
              <motion.span className="absolute bg-[#ffffff] bg-opacity-5 text-[#ffffff] rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 duration-700 top-14">
                {name}
              </motion.span>
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Nav;
