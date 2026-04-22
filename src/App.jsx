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
    setTimeout(() => setLoader(false), 1500);
  }, []);

  // 🔥 Route Change Loader
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loader && <BlinkingLoader />}

      <main
        className={`${loader ? "hidden" : "block"} bg-[#151312] text-white`}
      >
        <ScrollProgress />

        <Nav />

        <section className="flex w-full h-screen overflow-hidden px-6 lg:px-20 gap-10">
          <div className="w-[300px] flex-shrink-0 hidden lg:block">
            <div className="sticky top-10 h-[90vh] flex items-center">
              <Card />
            </div>
          </div>

          <div className="flex-1 h-full overflow-y-auto pr-2 scrollbar-hide">
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
