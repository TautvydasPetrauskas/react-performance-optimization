import { Profiler, useState } from "react";
import { SuperIncrementButton } from "./components/super-incremenet-button.component";
import { UserProfile } from "./components/user-profile.component";
import { UserTheme } from "./interfaces/user.interface";
import { onProfilerRender } from "../../helpers/general-helpers";

export interface UserProfileProps {
  theme: UserTheme;
}

export const User = () => {
  const [count, setCount] = useState<number>(0);
  const theme = { color: "blue", count: 1 }; // This object is recreated every render
  const handleBigIncrement = () => setCount((prevCount) => prevCount + 10); // Function recreated every render

  return (
    <Profiler id="User Memo page" onRender={onProfilerRender}>
      <p style={{ color: theme.color }}>Hello, world!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <SuperIncrementButton handleClick={handleBigIncrement} />
      <UserProfile theme={theme} />
    </Profiler>
  );
};
