import { useState } from "react";
import { calculateExpensiveValue } from "../helpers/value.helper";

export const LazyCat = () => {
  const [count, setCount] = useState<number>(calculateExpensiveValue());

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
    </div>
  );
};
