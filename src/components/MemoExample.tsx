import React, { useState, useMemo } from "react";

const MemoExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const calculateExpensiveValue = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Optimized Version (useMemo)</h2>
      <p>Expensive calculation result: {calculateExpensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MemoExample;
