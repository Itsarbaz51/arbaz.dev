import React, { useRef } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Card() {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".profile", {
      x: -500,
      duration: 0.5,
    });
    tl.from(".profile .img, .social a, .h1 , .p", {
      x: 1000,
      duration: 0.5,
      stagger: 0.15,
    });
  }, []);

  return (
    <div className="relative">
      <div className="sticky top-0 pt-12">
        <div className="profile bg-white rounded-2xl overflow-hidden w-full xl:w-fit h-fit flex justify-center items-center flex-col px-9 pt-8 text-black relative">
          <img src="/card/circ.svg" className=" absolute -top-4 -left-0" alt="cir" />
          <img
            src="/card/profile.png"
            alt="Profile"
            width={100}
            height={100}
            className="img rounded-3xl object-cover w-[240px] h-[284px]"
          />
          <div className="w-full text-center pt-3">
            <h1 className="h1 text-[2.7rem] font-bold">Arbaz Khan</h1>
            <img
              src="/card/arrow.svg"
              alt="arrow"
              className="relative lg:-left-[63%] -left-[88%] bottom-24 lg:-bottom-7 lg:-mt-16"
            />
            <div className="w-full space-y-10 -mt-36 lg:-mt-0">
              <p className="p text-gray-600 inline-block text-[18px] leading-5 font-semibold">
                A Web Developer & Web Designer <br /> who has created countless <br />
                innovative solutions.
              </p>
              <div className="social flex justify-between lg:mx-16 mx-4 sm:mx-52 pb-7">
                {[
                  { icon: FaLinkedin, path: "/" },
                  { icon: FaInstagram, path: "/" },
                  { icon: FaXTwitter, path: "/" },
                  { icon: MdOutlineMailOutline, path: "/" },
                ].map(({ icon: Icon, path }, index) => (
                  <a href={path} key={index} className="list-none">
                    <Icon className="size-5 text-[#F46C38]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
