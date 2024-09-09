import React from "react";
import { DBLeftSection, DBMidSection, DBRightSection } from "../components";

function Dashboard() {
  return (
    <div className="w-screen h-screen flex items-center bg-primary">
      <DBLeftSection />
      <DBMidSection />
      <DBRightSection />
    </div>
  );
}

export default Dashboard;
