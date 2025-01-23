import { ReactNode, useState } from "react";
import { DashboardBackground } from "../types/dashboard.type";

export const BackgroundController = ({ children }: { children: ReactNode }) => {
  const [bgColor, setBgColor] = useState<DashboardBackground>("lightgray");

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <select
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value as DashboardBackground)}
      >
        <option value="lightgray">Light Gray</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
      </select>
      {children}
    </div>
  );
};
