import { useMotionValue, motion, animate } from "motion/react";
import { useEffect, useState } from "react";

function Counter() {
  const countExp = useMotionValue(0);
  const countProject = useMotionValue(0);

  const [exp, setExp] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    // Internship = 3 months
    const internshipMonths = 3;

    // Current work start date
    const startDate = new Date("2025-06-04");
    const now = new Date();

    const currentMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    const totalMonths = internshipMonths + currentMonths;

    // 👉 Convert to years (1 decimal)
    const totalYears = totalMonths / 12;

    const controlsExp = animate(countExp, totalYears, { duration: 1 });
    const controlsProject = animate(countProject, 5, { duration: 1 });

    const updateExp = () => setExp(parseFloat(countExp.get().toFixed(1)));

    const updateProject = () => setProjects(Math.round(countProject.get()));

    const unsubExp = countExp.on("change", updateExp);
    const unsubProj = countProject.on("change", updateProject);

    return () => {
      controlsExp.stop();
      controlsProject.stop();
      unsubExp();
      unsubProj();
    };
  }, []);

  return (
    <motion.div className="flex lg:justify-start justify-center items-center space-x-16 my-10 lg:my-0">
      {/* Experience */}
      <motion.div>
        <motion.pre className="text-5xl font-semibold">+{exp}</motion.pre>
        <motion.span className="text-[#818181] text-[1.2rem]">
          YEARS <br /> EXPERIENCE
        </motion.span>
      </motion.div>

      {/* Projects */}
      <motion.div>
        <motion.pre className="text-5xl font-semibold">+{projects}</motion.pre>
        <motion.span className="text-[#818181] text-[1.2rem]">
          PRODUCTION <br /> PROJECTS
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default Counter;
