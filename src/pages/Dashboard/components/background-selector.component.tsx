import { useState } from "react";
import { DashboardBackground } from "../types/dashboard.type";

export const BackgroundSelector = () => {
  const [bgColor, setBgColor] = useState<DashboardBackground>("lightgray");

  return (
    <>
      <select
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value as DashboardBackground)}
      >
        <option value="lightgray">Light Gray</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
      </select>
      <div style={{ backgroundColor: bgColor, padding: "20px" }}>
        <p>Optimized version 1 of Dashboard Overview</p>
      </div>
    </>
  );
};
