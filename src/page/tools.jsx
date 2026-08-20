import React from "react";
import Ept from "../components/Ept";
import { toolsData } from "../dummyData/data";

function Tools() {
  return (
    <div className="pt-12">
      <Ept projectData={toolsData} />
    </div>
  );
}

export default Tools;
