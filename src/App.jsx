import { Outlet, useLocation } from "react-router-dom";
import Card from "./components/Card";
import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
import BlinkingLoader from "./components/Loader.jsx";

function App() {
  const [loader, setLoader] = useState(true);
  const location = useLocation();

  // 🔥 Initial Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 Route Change Loader
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* 🔥 Overlay Loader (DO NOT HIDE MAIN) */}
      {loader && (
        <div className="fixed inset-0 z-50 bg-[#151312] flex items-center justify-center">
          <BlinkingLoader />
        </div>
      )}

      <main className="bg-[#151312] text-white flex flex-col justify-center items-center ">
        <ScrollProgress />
        <Nav />

        <section className="flex w-full px-6 lg:px-20 gap-10">
          {/* LEFT CARD */}
          <div className="w-[300px] flex-shrink-0  ">
            <div className="sm:sticky top-20 mt-24">
              <Card />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            <div className="max-w-[1000px] mx-auto">
              <Outlet />
              <Contact />
              <Footer />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
