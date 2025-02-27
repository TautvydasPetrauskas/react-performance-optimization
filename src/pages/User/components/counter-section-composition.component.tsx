import { memo, useCallback, useState } from "react";
import { SuperIncrementButton } from "./super-incremenet-button.component";

const SuperIncrementButtonMemoized = memo(SuperIncrementButton);

export const CounterSectionComposition = () => {
  const [count, setCount] = useState<number>(0);

  const handleBigIncrement = useCallback(
    () => setCount((prevCount) => prevCount + 10),
    []
  );

  return (
    <div>
      <p style={{ color: "blue" }}>Compozed user!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <SuperIncrementButtonMemoized handleClick={handleBigIncrement} />
    </div>
  );
};
