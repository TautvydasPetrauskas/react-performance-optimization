import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React Performance Optimization Demo</h1>
      <p>
        Welcome to the React Performance Optimization Demo! This app
        demonstrates different React performance techniques. Navigate to each
        page to see examples of optimized and non-optimized code.
      </p>
      <ul>
        <li>
          <Link to="/memo">useMemo Optimization</Link>
        </li>
        <li>
          <Link to="/callback">useCallback Optimization</Link>
        </li>
        {/* Add more links here for additional optimizations */}
      </ul>
    </div>
  );
};

export default Home;
