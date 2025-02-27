import { Profiler, useState } from "react";
import { SuperIncrementButton } from "./super-incremenet-button.component";
import { UserProfile } from "./user-profile.component";
import { onProfilerRender } from "../../../helpers/general-helpers";

export const UserComponent = () => {
  const [count, setCount] = useState<number>(0);
  const theme = { color: "blue", count: 1 };
  const handleBigIncrement = () => setCount((prevCount) => prevCount + 10);

  return (
    <Profiler id="User non-optimized" onRender={onProfilerRender}>
      <p style={{ color: "red" }}>Non-optimized user!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <SuperIncrementButton handleClick={handleBigIncrement} />
      <UserProfile theme={theme} />
    </Profiler>
  );
};
