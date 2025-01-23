import { memo, Profiler, useCallback, useState } from "react";
import { SuperIncrementButton } from "./components/super-incremenet-button.component";
import { UserProfileUseMemo } from "./components/user-profile-use-memo.component copy";
import { onProfilerRender } from "../../helpers/general-helpers";

const MemoizedIncrement = memo(SuperIncrementButton);
const MemoizedUserProfile = memo(UserProfileUseMemo);

const theme = { color: "blue", count: 1 };

export const UserMemoized = () => {
  const [count, setCount] = useState<number>(0);

  const handleBigIncrement = () => setCount((prevCount) => prevCount + 10);

  return (
    <Profiler id="User Memo page" onRender={onProfilerRender}>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <MemoizedIncrement handleClick={handleBigIncrement} />
      <MemoizedUserProfile theme={theme} />
    </Profiler>
  );
};
