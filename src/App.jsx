import { Outlet } from "react-router-dom";
import Card from "./components/Card";
import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import { useScroll } from "motion/react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="bg-[#151312] flex w-full flex-col text-white justify-center items-center ">
      <ScrollProgress />
      <div className="flex w-full flex-col-reverse md:flex-col text-white justify-center items-center">
        <Nav />
        <section className="w-full lg:w-fit flex-col xl:flex-row flex px-4 lg:px-0">
          {/* Custom Cursor */}
          <CustomCursor />
          <Card />
          <div className="lg:pl-12">
            <Outlet />
            <Contact />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
export default App;

export const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, type: "default" });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      let type = "default";

      if (["P", "SPAN", "H4"].includes(e.target.tagName)) {
        type = "small";
      } else if (["H1", "H2", "H3", "LI"].includes(e.target.tagName)) {
        type = "large";
      }

      setTargetPos({ x: e.clientX, y: e.clientY });
      setCursorPos((prev) => ({ ...prev, type }));
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth movement effect
  useEffect(() => {
    const updatePosition = () => {
      setCursorPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.1, // Smooth transition
        y: prev.y + (targetPos.y - prev.y) * 0.1,
        type: prev.type,
      }));
      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  }, [targetPos]);

  return (
    <div
      className={`hidden xl:block fixed pointer-events-none transition-transform ease-out duration-700`}
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
        transform: "translate(-50%, -50%)",
        width:
          cursorPos.type === "small"
            ? "2px "
            : cursorPos.type === "large"
            ? "3px"
            : "2.5rem",
        height:
          cursorPos.type === "small"
            ? "1rem"
            : cursorPos.type === "large"
            ? "5rem"
            : "2.5rem",
        border: "2px solid red",
        borderRadius: cursorPos.type === "default" ? "50%" : "0",
        zIndex: 50,
      }}
    />
  );
};
