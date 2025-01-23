import { ExpensiveChart } from "./components/expensive-chart.component";
import { BackgroundController } from "./components/background-controler.component";

export const DashboardOptimized2 = () => {
  return (
    <>
      <BackgroundController>
        <p>Dashboard Overview</p>
        <ExpensiveChart />
      </BackgroundController>
    </>
  );
};
