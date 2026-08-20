import React from "react";
import Ept from "../components/Ept";
import { expreienceData } from "../dummyData/data";

function Experience() {
  return (
    <div className="pt-12">
      <Ept projectData={expreienceData} />
    </div>
  );
}

export default Experience;
