import React, { useState } from "react";
import { motion } from "motion/react";

function Ept({ projectData, variant }) {
  const [selected, setSelected] = useState(null);

  const heading =
    variant === "project"
      ? "Projects"
      : variant === "experience"
      ? "Experience"
      : "Tech Stack";

  const handleClick = (item) => {
    if (item?.link && item.link !== "#") {
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else {
      setSelected(item);
    }
  };

  return (
    <div className="my-20 w-full max-w-[1200px] mx-auto px-4">
      <h1 className="text-3xl lg:text-5xl font-bold mb-12 text-center lg:text-left">
        {heading}
      </h1>

      {/* PROJECTS */}
      {variant === "project" && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projectData.map((item, i) => (
            <motion.div
              key={item.id || i}
              whileHover={{ y: -5 }}
              onClick={() => handleClick(item)}
              className="bg-white/5 border border-white/10 rounded-2xl p-5
              hover:bg-white/10 transition cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-4 w-full h-[180px] object-cover"
              />

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {item.tagLine}
              </p>

              <span className="inline-flex items-center gap-1 mt-4 text-[#F46C38] text-sm">
                View Project →
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {/* EXPERIENCE */}
      {variant === "experience" && (
        <div className="relative max-w-[800px] mx-auto">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/20" />

          <div className="flex flex-col gap-8 pl-8">
            {projectData.map((item, i) => (
              <motion.div
                key={item.id || i}
                whileHover={{ x: 5 }}
                onClick={() => handleClick(item)}
                className="relative cursor-pointer group"
              >
                <div className="absolute -left-[18px] top-2 w-3 h-3 bg-[#F46C38] rounded-full" />

                <h3 className="text-lg font-semibold group-hover:text-[#F46C38] transition">
                  {item.title}
                </h3>

                <p className="text-sm text-[#F46C38]">
                  {item.role}
                </p>

                <p className="text-xs text-gray-400">
                  {item.companyName}
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  {item.tagLine}
                </p>

                {item.link && item.link !== "#" && (
                  <span className="inline-block mt-2 text-xs text-[#F46C38]">
                    View Project →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* TOOLS */}
      {variant === "tools" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {projectData.map((item, i) => (
            <motion.div
              key={item.id || i}
              whileHover={{ y: -3, scale: 1.02 }}
              onClick={() => handleClick(item)}
              className="flex items-center gap-3 p-3 bg-white/5
              border border-white/10 rounded-xl hover:bg-white/10
              transition cursor-pointer"
            >
              <img
                src={item.toolImg}
                alt={item.title}
                className="size-8 object-contain"
              />

              <div>
                <span className="text-sm block">
                  {item.title}
                </span>

                {item.tagLine && (
                  <span className="text-xs text-gray-500">
                    {item.tagLine}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* MODAL - only when link is "#" */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm
          flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#111] max-w-[600px] w-full p-6 rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-3">
              {selected.title}
            </h2>

            {selected.img && (
              <img
                src={selected.img}
                alt={selected.title}
                className="rounded-xl mb-4 w-full h-[200px] object-cover"
              />
            )}

            {selected.toolImg && (
              <img
                src={selected.toolImg}
                alt={selected.title}
                className="w-16 h-16 object-contain mb-4"
              />
            )}

            <p className="text-gray-300 text-sm leading-relaxed">
              {selected.tagLine}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ept;