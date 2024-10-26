import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const MemoPage = lazy(() => import("./pages/MemoPage"));
const CallbackPage = lazy(() => import("./pages/CallbackPage"));

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/memo">useMemo</Link> |{" "}
        <Link to="/callback">useCallback</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memo" element={<MemoPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
