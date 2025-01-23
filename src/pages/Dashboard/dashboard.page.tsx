import { useState } from "react";
import { ExpensiveChart } from "./components/expensive-chart.component";
import { DashboardBackground } from "./types/dashboard.type";

export const Dashboard = () => {
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
        <p>Dashboard Overview</p>
      </div>
      <ExpensiveChart />
    </>
  );
};
