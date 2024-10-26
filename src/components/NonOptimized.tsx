import { useState } from "react";

const NonOptimized = () => {
  const [count, setCount] = useState(0);

  const calculateExpensiveValue = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  };

  return (
    <div>
      <h2>Non-Optimized Version</h2>
      <p>Expensive calculation result: {calculateExpensiveValue()}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default NonOptimized;
