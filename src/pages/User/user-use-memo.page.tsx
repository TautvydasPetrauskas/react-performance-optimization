import { useCallback, useMemo, useState } from "react";
import { SuperIncrementButton } from "./components/super-incremenet-button.component";
import { UserProfileUseMemo } from "./components/user-profile-use-memo.component copy";

export const UserUseMemo = () => {
  const [count, setCount] = useState<number>(0);

  // ✅ Memoize `theme`, so React reuses the same object reference
  const theme = useMemo(() => ({ color: "blue", count: 1 }), []);

  const handleBigIncrement = useCallback(
    () => setCount((prevCount) => prevCount + 10),
    []
  );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <SuperIncrementButton handleClick={handleBigIncrement} />
      <UserProfileUseMemo theme={theme} />
    </div>
  );
};
