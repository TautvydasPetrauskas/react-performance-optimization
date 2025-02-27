import { useState } from "react";
import { DashboardBackground } from "../types/dashboard.type";
import { ExpensiveChart } from "./expensive-chart.component";

export const DashboardComponent = () => {
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
        <p>Non-optimized Dashboard Overview</p>
      </div>
      <ExpensiveChart />
    </>
  );
};
