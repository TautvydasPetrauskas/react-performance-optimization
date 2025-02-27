import { BackgroundController } from "./background-controler.component";
import { ExpensiveChart } from "./expensive-chart.component";

export const DashboardOptimized2 = () => {
  return (
    <>
      <BackgroundController>
        <p>Optimized version 2 of Dashboard Overview</p>
        <ExpensiveChart />
      </BackgroundController>
    </>
  );
};
