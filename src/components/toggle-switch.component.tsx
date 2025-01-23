import { Dispatch, SetStateAction } from "react";

interface ToggleSwitchProps {
  setOptimized: Dispatch<SetStateAction<boolean>>;
}

export const ToggleSwitch = ({ setOptimized }: ToggleSwitchProps) => (
  <label>
    <input type="checkbox" onChange={(e) => setOptimized(e.target.checked)} />
    Use Optimized Version
  </label>
);
