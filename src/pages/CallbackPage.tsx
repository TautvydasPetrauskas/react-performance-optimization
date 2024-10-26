import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import CallbackExample from "../components/CallbackExample";
import NonOptimized from "../components/NonOptimized";

const CallbackPage: React.FC = () => {
  const [isOptimized, setOptimized] = useState(false);

  return (
    <div>
      <h1>useCallback Optimization</h1>
      <ToggleSwitch setOptimized={setOptimized} />
      {isOptimized ? <CallbackExample /> : <NonOptimized />}
    </div>
  );
};

export default CallbackPage;
