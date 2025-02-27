import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

function Ept({ projectData }) {
  const { img, time, toolImg } = projectData[0];

  const locationPath = useLocation().pathname;

  return (
    <motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-[3.5rem] lg:text-[4rem] font-bold max-w-[800px] text-center lg:text-start leading-none my-10 md:my-20 xl:w-fit"
      >
        {img ? "RECENT" : time ? "45 DAY'S OF" : toolImg ? "PREMIUM" : ""}
        <br />
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="text-[#474649] list-none"
        >
          {img ? "PROJECTS" : time ? "EXPERIENCE" : toolImg ? "TOOLS" : ""}
        </motion.li>
      </motion.h1>
      <div
        className={` ${
          toolImg && "grid grid-cols-1 md:grid-cols-2 justify-between"
        }`}
      >
        {(locationPath === "/" &&
          projectData
            .slice(0, 4)
            .map(
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
                  // initial={{ opacity: 0, y: 50 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: false, amount: 0.2 }}
                  // transition={{ duration: 0.2, delay: 0.2 }}
                  key={index}
                  className={`flex w-full sm:justify-start relative group sm:items-start hover:bg-white p-5 rounded-3xl hover:bg-opacity-5 duration-700 my-5 ${
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
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full sm:w-[10rem] sm:h-[8rem] object-cover rounded-xl"
                    />
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
                        <span className="absolute right-5 flex size-3 z-10">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5FF41] opacity-75"></span>
                          <span className="relative inline-flex size-3 rounded-full bg-[#C5FF41]"></span>
                        </span>
                        <IoIosArrowRoundForward className="-rotate-45 text-[2rem] bg-[#F46C38] rounded-full" />
                      </div>
                    )}
                    <h4
                      className={`font-bold lg:text-[2rem] text-[1.8rem] xl:w-fit`}
                    >
                      {title}
                    </h4>
                    {role && <h5 className="pt-2 pb-1">{role}</h5>}
                    <p
                      className={`text-[#818181] w-full leading-5 sm:leading-none sm:max-w-[550px] text-[1.2rem] xl:w-fit ${
                        time && "w-full leading-none"
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
                  </div>
                </motion.div>
              )
            )) ||
        locationPath === "/project" ||
        locationPath === "/tools" ||
        locationPath === "/experience"
          ? projectData.map(
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  key={index}
                  className={`flex w-full sm:justify-start relative group sm:items-start hover:bg-white p-5 rounded-3xl hover:bg-opacity-5 duration-700 my-5 ${
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
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full sm:w-[10rem] sm:h-[8rem] object-cover rounded-xl"
                    />
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
                        <span className="absolute right-5 flex size-3 z-10">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5FF41] opacity-75"></span>
                          <span className="relative inline-flex size-3 rounded-full bg-[#C5FF41]"></span>
                        </span>
                        <IoIosArrowRoundForward className="-rotate-45 text-[2rem] bg-[#F46C38] rounded-full" />
                      </div>
                    )}
                    <h4
                      className={`font-bold lg:text-[2rem] text-[1.8rem] xl:w-fit`}
                    >
                      {title}
                    </h4>
                    {role && <h5 className="pt-2 pb-1">{role}</h5>}
                    <p
                      className={`text-[#818181] w-full leading-5 sm:leading-none sm:max-w-[550px] text-[1.2rem] xl:w-fit ${
                        time && "w-full leading-none"
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
                  </div>
                </motion.div>
              )
            )
          : null}
      </div>
    </motion.div>
  );
}

export default Ept;
