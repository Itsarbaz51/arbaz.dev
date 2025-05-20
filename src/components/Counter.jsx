import { useMotionValue, motion, animate } from "motion/react";
import { useEffect, useState } from "react";

function Counter() {
  const count = useMotionValue(0);
  const countProject = useMotionValue(0);

  const [rounded, setRounded] = useState(0);
  const [roundedProject, setRoundedProject] = useState(0);

  useEffect(() => {
    const controls = animate(count, 90, { duration: 1 });
    const controlsProject = animate(countProject, 2, { duration: 1 });

    const update = () => setRounded(Math.round(count.get()));
    const updateProject = () =>
      setRoundedProject(Math.round(countProject.get()));

    const unsubscribe = count.on("change", update);
    const unsubscribeProject = countProject.on("change", updateProject);

    return () => {
      controls.stop();
      controlsProject.stop();
      unsubscribe();
      unsubscribeProject();
    };
  }, []);

  return (
    <motion.div className="flex lg:justify-start justify-center items-center space-x-16 my-10 lg:my-0 ">
      <motion.div>
        <motion.pre className="text-5xl font-semibold relative">
          +{rounded}
          <motion.sup className="text-sm absolute">Internship</motion.sup>
        </motion.pre>
        <motion.span className="text-[#818181] text-[1.2rem]">
          DAY'S OF <br /> EXPERIENCE
        </motion.span>
      </motion.div>
      <motion.div>
        <motion.pre className="text-5xl font-semibold">
          +{roundedProject}
        </motion.pre>
        <motion.span className="text-[#818181] text-[1.2rem]">
          PROJECTS
          <br /> COMPLETED
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default Counter;
