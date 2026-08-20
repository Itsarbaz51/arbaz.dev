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

  // Initial Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1200);

    return () => clearTimeout(timer);
  }, []);

  // Route Change Loader
  useEffect(() => {
    setLoader(true);

    const timer = setTimeout(() => setLoader(false), 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Overlay Loader */}
      {loader && (
        <div className="fixed inset-0 z-[9999] bg-[#151312] flex items-center justify-center">
          <BlinkingLoader />
        </div>
      )}

      <main className="min-h-screen w-full bg-[#151312] text-white overflow-x-hidden">
        <ScrollProgress />

        {/* Main Layout */}
        <section
          className="
            w-full
            max-w-[1600px]
            mx-auto
            px-4
            sm:px-6
            md:px-8
            lg:px-12
            xl:px-20
            py-8
            lg:py-12
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              gap-8
              lg:gap-10
              xl:gap-14
              items-start
            "
          >
            {/* LEFT CARD */}
            <aside
              className="
                w-full
                lg:w-[280px]
                xl:w-[300px]
                lg:flex-shrink-0
              "
            >
              <div
                className="
                  w-full
                  lg:sticky
                  lg:top-10
                "
              >
                <Card />
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <div className="w-full min-w-0 flex-1">
              <div
                className="
                  w-full
                  max-w-[1000px]
                  mx-auto
                "
              >
                <Outlet />

                <Contact />

                <Footer />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        {/* <Nav /> */}
      </main>
    </>
  );
}

export default App;
