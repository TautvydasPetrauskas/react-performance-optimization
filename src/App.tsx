import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = lazy(() =>
  import("./pages/index").then((module) => ({ default: module.Home }))
);
const User = lazy(() =>
  import("./pages/User").then((module) => ({ default: module.User }))
);
const Usermemoized = lazy(() =>
  import("./pages/User").then((module) => ({ default: module.UserMemoized }))
);
const UserUseMemo = lazy(() =>
  import("./pages/User").then((module) => ({ default: module.UserUseMemo }))
);
const UserComposition = lazy(() =>
  import("./pages/User").then((module) => ({ default: module.UserComposition }))
);
const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({ default: module.Dashboard }))
);
const DashboardOptimized1 = lazy(() =>
  import("./pages/Dashboard").then((module) => ({
    default: module.DashboardOptimized1,
  }))
);
const DashboardOptimized2 = lazy(() =>
  import("./pages/Dashboard").then((module) => ({
    default: module.DashboardOptimized2,
  }))
);
const Customer = lazy(() =>
  import("./pages/Customer").then((module) => ({
    default: module.Customer,
  }))
);

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/user-use-memo">User Use Memo</Link>
        </li>
        <li>
          <Link to="/user-memoized">User Memoized</Link>
        </li>
        <li>
          <Link to="/user-composition">User Composition</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard-optimized-1">Dashboard Optimized 1</Link>
        </li>
        <li>
          <Link to="/dashboard-optimized-2">Dashboard Optimized 2</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-memoized" element={<Usermemoized />} />
        <Route path="/user-use-memo" element={<UserUseMemo />} />
        <Route path="/user-composition" element={<UserComposition />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard-optimized-1"
          element={<DashboardOptimized1 />}
        />
        <Route
          path="/dashboard-optimized-2"
          element={<DashboardOptimized2 />}
        />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
