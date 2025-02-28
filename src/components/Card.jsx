import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
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
        <div className="profile bg-white rounded-2xl overflow-hidden w-full xl:w-fit h-fit flex justify-center items-center flex-col px-9 pt-8 pb-4 text-black relative">
          <img
            src="/card/circ.svg"
            className=" absolute -top-4 -left-0"
            alt="cir"
          />
          <img
            src="/card/profile.png"
            alt="Profile"
            width={100}
            height={100}
            className="img rounded-3xl object-cover w-[240px] h-[284px]"
          />
          <div className="w-full text-center pt-3 flex flex-col items-center">
            <h1 className="h1 text-[2.7rem] font-bold">Arbaz Khan</h1>
            <img
              src="/card/arrow.svg"
              alt="arrow"
              className="relative lg:-left-[63%] -left-[88%] bottom-24 lg:-bottom-7 lg:-mt-16"
            />
            <div className="w-full space-y-10 -mt-36 lg:-mt-0">
              <p className="p text-gray-600 inline-block text-[18px] leading-5 font-semibold">
                A Web Developer & Web Designer <br /> who has created countless{" "}
                <br />
                innovative solutions.
              </p>
              <div className="social flex justify-between lg:mx-16 mx-4 sm:mx-52 pb-4 ">
                {[
                  {
                    icon: FaLinkedin,
                    path: "https://www.linkedin.com/in/arbaz-kayamkhani-1031b7338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
                  <Link to={path} key={index} className="list-none">
                    <Icon className="size-5 text-[#F46C38]" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-items-center">
              <li className="bg-[#F46C38] list-none p-1 mr-1 rounded-full text-white">
                <IoIosCall />
              </li>
              <p className="text-gray-600 text-lg">
                <Link
                  to="tel:+919649730196"
                  className="text-gray-600"
                >
                  +91-9649730196
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
