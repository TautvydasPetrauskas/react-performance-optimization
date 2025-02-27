import { ContextOptimized } from "./components/context-optimized";
import { ContextNonOptimized } from "./components/context-non-optimized";

export const Context = () => {
  return (
    <>
      <ContextNonOptimized />
      <ContextOptimized />
    </>
  );
};
