import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import MemoExample from "../components/MemoExample";
import NonOptimized from "../components/NonOptimized";

const MemoPage: React.FC = () => {
  const [isOptimized, setOptimized] = useState(false);

  return (
    <div>
      <h1>useMemo Optimization</h1>
      <ToggleSwitch setOptimized={setOptimized} />
      {isOptimized ? <MemoExample /> : <NonOptimized />}
    </div>
  );
};

export default MemoPage;
