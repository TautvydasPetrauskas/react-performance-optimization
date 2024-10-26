import React from "react";

interface ToggleSwitchProps {
  setOptimized: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ setOptimized }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setOptimized(e.target.checked)}
        />
        Use Optimized Version
      </label>
    </div>
  );
};

export default ToggleSwitch;
