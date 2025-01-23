import { ProfilerOnRenderCallback } from "react";

export const onProfilerRender: ProfilerOnRenderCallback = (
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) => {
  console.groupCollapsed(`🔍 Profiler [${id}] - ${phase.toUpperCase()}`);
  console.log(`📌 Phase: ${phase}`);
  console.log(`⏱ Actual Duration: ${actualDuration.toFixed(2)}ms`);
  console.log(`⚡️ Base Duration: ${baseDuration.toFixed(2)}ms`);
  console.log(`🚀 Start Time: ${startTime.toFixed(2)}ms`);
  console.log(`✅ Commit Time: ${commitTime.toFixed(2)}ms`);

  // Detect slow renders
  if (actualDuration > 100) {
    console.error(
      `🚨 Critical slow render in "${id}": ${actualDuration.toFixed(2)}ms`
    );
  } else if (actualDuration > 50) {
    console.warn(
      `⚠️ Slow render detected in "${id}": ${actualDuration.toFixed(2)}ms`
    );
  } else if (actualDuration > 16) {
    console.info(
      `ℹ️ Minor render delay in "${id}": ${actualDuration.toFixed(2)}ms`
    );
  }

  console.groupEnd();
};
