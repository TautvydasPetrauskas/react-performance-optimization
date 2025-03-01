import { useCallback, useMemo, useState } from "react";
import { SuperIncrementButton } from "./super-incremenet-button.component";
import { UserProfileUseMemo } from "./user-profile-use-memo.component copy";

export const UserUseMemo = () => {
  const [count, setCount] = useState<number>(0);

  const theme = useMemo(() => ({ color: "blue", count: 1 }), []);

  const handleBigIncrement = useCallback(
    () => setCount((prevCount) => prevCount + 10),
    []
  );

  return (
    <div id="user-use-memo">
      <p style={{ color: "orange" }}>Use-memo user!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <SuperIncrementButton handleClick={handleBigIncrement} />
      <UserProfileUseMemo theme={theme} />
    </div>
  );
};
