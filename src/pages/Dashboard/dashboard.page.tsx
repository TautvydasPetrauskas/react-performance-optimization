import { DashboardOptimized1 } from "./components/dashboard-optimized1.component";
import { DashboardOptimized2 } from "./components/dashboard-optimized2.component";
import { DashboardComponent } from "./components/dashboard.component";

export const Dashboard = () => {
  return (
    <>
      <DashboardComponent />
      <hr />
      <DashboardOptimized1 />
      <hr />
      <DashboardOptimized2 />
    </>
  );
};
