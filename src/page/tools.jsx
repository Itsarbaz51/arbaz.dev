import React from "react";
import Ept from "../components/Ept";

function Tools() {
  return (
    <div className="pt-12">
      <Ept
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
          {
            id: 5,
            title: "CSS",
            tagLine: "Styling Language",
            toolImg: "/tools/css.png",
            link: "#",
          },
          {
            id: 6,
            title: "JavaScript",
            tagLine: "Programming Language",
            toolImg: "/tools/js.png",
            link: "#",
          },
          {
            id: 7,
            title: "Express.js",
            tagLine: "Backend Framework",
            toolImg: "/tools/express.png",
            link: "#",
          },
          {
            id: 8,
            title: "MongoDB",
            tagLine: "NoSQL Database",
            toolImg: "/tools/db.png",
            link: "#",
          },
          {
            id: 9,
            title: "Canva",
            tagLine: "Design Tool",
            toolImg: "/tools/canva.webp",
            link: "#",
          },
          {
            id: 10,
            title: "Framer Motion",
            tagLine: "Animation Library",
            toolImg: "/tools/motion.jpg",
            link: "#",
          },
          {
            id: 11,
            title: "GSAP",
            tagLine: "Animation Library",
            toolImg: "/tools/gsap.jpg",
            link: "#",
          },
                
        ]}
      />
    </div>
  );
}

export default Tools;
