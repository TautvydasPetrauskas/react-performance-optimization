import React, { useState, useCallback } from "react";

interface ChildProps {
  onIncrement: () => void;
}

const Child: React.FC<ChildProps> = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment from Child</button>;
});

const CallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Optimized Version (useCallback)</h2>
      <p>Count: {count}</p>
      <Child onIncrement={handleIncrement} />
    </div>
  );
};

export default CallbackExample;
