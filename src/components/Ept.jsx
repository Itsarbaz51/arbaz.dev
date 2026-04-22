import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Ept({ projectData, variant }) {
  const [selected, setSelected] = useState(null);
  const heading =
    variant === "project"
      ? "Projects"
      : variant === "experience"
        ? "Experience"
        : "Tech Stack";

  return (
    <div className="my-20 w-full max-w-[1200px] mx-auto px-4">
      {/* 🔥 HEADING */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center lg:text-left">
        {heading}
      </h1>

      {/* 🔥 PROJECTS */}
      {variant === "project" && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projectData.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
            >
              <img
                src={item.img}
                className="rounded-xl mb-4 w-full h-[180px] object-cover"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p
                className="text-gray-400 text-sm mt-2 line-clamp-2"
                onClick={() => setSelected(item)}
              >
                {item.tagLine}
              </p>{" "}
            </div>
          ))}
        </div>
      )}

      {/* 🔥 EXPERIENCE (CENTER FIXED) */}
      {variant === "experience" && (
        <div className="relative max-w-[800px] mx-auto">
          {/* line center */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/20"></div>

          <div className="flex flex-col gap-8 pl-8">
            {projectData.map((item, i) => (
              <div key={i} className="relative">
                {/* dot */}
                <div className="absolute -left-[18px] top-2 w-3 h-3 bg-[#F46C38] rounded-full"></div>

                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-[#F46C38]">{item.role}</p>
                <p className="text-xs text-gray-400">{item.companyName}</p>
                <p className="text-gray-400 text-sm mt-2">{item.tagLine}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 TOOLS (GRID FIXED) */}
      {variant === "tools" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {projectData.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
            >
              <img src={item.toolImg} className="size-8" />
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      )}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111] max-w-[600px] w-full p-6 rounded-2xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* 🔥 CONTENT */}
            <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>

            {selected.img && (
              <img
                src={selected.img}
                className="rounded-xl mb-4 w-full h-[200px] object-cover"
              />
            )}

            <p className="text-gray-300 text-sm leading-relaxed">
              {selected.tagLine}
            </p>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                className="inline-block mt-4 text-[#F46C38]"
              >
                View Live →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Ept;
