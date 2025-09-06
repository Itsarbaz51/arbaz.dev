import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

function Ept({ projectData }) {
  const { img, time, toolImg } = projectData[0];

  const locationPath = useLocation().pathname;

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-[3.5rem] lg:text-[4rem] font-bold max-w-[800px] text-center lg:text-start leading-none my-10 md:my-20 xl:w-fit"
      >
        {img ? "RECENT" : time ? "peresnt azzunique OF" : toolImg ? "PREMIUM" : ""}
        <br />
        <motion.li className="text-[#474649] list-none">
          {img ? "PROJECTS" : time ? "EXPERIENCE" : toolImg ? "TOOLS" : ""}
        </motion.li>
      </motion.h1>
      <div
        className={` ${
          toolImg && "grid grid-cols-1 md:grid-cols-2 justify-between gap-6"
        } `}
      >
        {projectData.map(
          (
            {
              img,
              title,
              tagLine,
              link,
              time,
              toolImg,
              companyName,
              companyLocation,
              role,
            },
            index
          ) => (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.5 }}
              key={title + index}
              className={`flex w-full sm:justify-start relative group sm:items-start shadow-2xl bg-white/5 lg:hover:bg-white/10 p-5 rounded-3xl  duration-700 my-5 ${
                time && "py-5 lg:py-4 px-2 lg:px-1"
              } ${
                toolImg &&
                "justify-center items-center px-6 py-2 md:py-4 md:my-3 my-2"
              } ${img && "flex-col sm:flex-row justify-center items-center"}
                ${companyName && "flex-col-reverse sm:flex-row"} 
                `}
            >
              {companyName && (
                <span className="lg:absolute text-[1.2rem] p-3 lg:opacity-0 lg:group-hover:opacity-100 text-white lg:text-sm font-semibold flex flex-col right-2 bottom-2">
                  {companyName === "Project Experience" ? "" : "Company:"}{" "}
                  {companyName}
                  <span>
                      {companyLocation && "Location:"} {companyLocation}
                  </span>
                </span>
              )}

              {img && (
                <Link
                  to={link}
                  target="_blank"
                  className="w-full h-full sm:w-[200px] sm:h-[8rem]"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full object-contain bg-center h-full rounded-xl"
                  />
                </Link>
              )}
              {toolImg && (
                <img
                  src={toolImg}
                  alt={title}
                  className="size-16 object-cover rounded-xl"
                />
              )}
              <div className={`w-full px-4 relative my-4 sm:my-0`}>
                {!toolImg && (
                  <div className="absolute right-4 justify-self-end hover:scale-150 duration-700 max-w-fit hidden md:block">
                    <Link
                    to={link}
                    target="_blank">
                    <span className="absolute right-5 flex size-3 z-10">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5FF41] opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-[#C5FF41]"></span>
                    </span>
                    <IoIosArrowRoundForward className="-rotate-45 text-[2rem] bg-[#F46C38] rounded-full" />
                  </Link>
                  </div>
                )}
                <h4
                  className={`font-bold lg:text-[2rem] text-[1.8rem] xl:w-fit`}
                >
                  {title}
                </h4>
                {role && <h5 className="pt-2 pb-1">
                  <Link className="cursor-pointer" to={link}>{role}</Link></h5>}
                <p
                  className={`text-[#818181] w-full  sm:leading-none sm:max-w-[550px] text-[1rem] xl:w-fit ${
                    time && "w-full"
                  }`}
                >
                  {tagLine}
                </p>
                {time && (
                  <p
                    className={`text-[#818181] max-w-[550px] text-[1.3rem] md:mt-4 mt-2 `}
                  >
                    {time}
                  </p>
                )}

                {img &&<Link to={link} className="bg-white inline-block text-center hover:bg-white/90 text-black px-2 py-1 w-full mt-6 rounded-sm sm:hidden">View Live Project</Link>}
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Ept;
