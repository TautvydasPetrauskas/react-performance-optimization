import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = lazy(() =>
  import("./pages/home.page").then((module) => ({ default: module.Home }))
);

const User = lazy(() =>
  import("./pages/User").then((module) => ({ default: module.User }))
);

const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((module) => ({ default: module.Dashboard }))
);

const Theming = lazy(() =>
  import("./pages/Theming").then((module) => ({
    default: module.Theming,
  }))
);

const LazyCat = lazy(() =>
  import("./pages/lazy-cat.page").then((module) => ({
    default: module.LazyCat,
  }))
);

const Context = lazy(() =>
  import("./pages/ContextExample").then((module) => ({
    default: module.Context,
  }))
);

const ComponentA = lazy(() =>
  import("./pages/test.page").then((module) => ({
    default: module.ComponentA,
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
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/theming">Theming</Link>
        </li>
        <li>
          <Link to="/lazy-cat">Lazy cat</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/theming" element={<Theming />} />
        <Route path="/lazy-cat" element={<LazyCat />} />
        <Route path="/context" element={<Context />} />
        <Route path="/test" element={<ComponentA />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
