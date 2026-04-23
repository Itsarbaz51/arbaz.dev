import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Card() {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".profile", {
      opacity: 0,
      y: 80,
      duration: 0.6,
      ease: "power3.out",
    });

    tl.from(".profile *", {
      opacity: 0,
      y: 30,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="static top-10 ">
      <div className="profile bg-white text-black rounded-3xl shadow-xl p-8 min-h-[560px] flex flex-col items-center justify-between">
        <img
          src="/card/profile.png"
          alt="Profile"
          className="w-[200px] h-[240px] object-cover rounded-2xl"
        />

        <h1 className="text-2xl font-bold mt-4">Arbaz Khan</h1>

        <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
          Full Stack Developer & SaaS Builder <br />
          Building scalable products & real-world systems 🚀
        </p>

        <div className="flex gap-4 mt-5">
          {[
            {
              icon: FaLinkedin,
              path: "https://www.linkedin.com/in/arbaz-kayamkhani-1031b7338",
            },
            {
              icon: FaInstagram,
              path: "https://www.instagram.com/arbazkayamkhani.dev",
            },
            {
              icon: FaXTwitter,
              path: "https://www.x.com/arbazkyamkhani",
            },
            {
              icon: MdOutlineMailOutline,
              path: "mailto:itsarabaz51@gmail.com",
            },
          ].map(({ icon: Icon, path }, index) => (
            <a
              href={path}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#F46C38] hover:text-white transition"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>

        <a
          href="tel:+919649730196"
          className="flex items-center gap-2 mt-6 bg-[#F46C38] text-white px-4 py-2 rounded-xl hover:scale-105 transition"
        >
          <IoIosCall />
          <span className="text-sm font-medium">Call Me</span>
        </a>
      </div>
    </div>
  );
}

export default Card;
