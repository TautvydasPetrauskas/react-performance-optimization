import { ProfilerOnRenderCallback } from "react";

export const onProfilerRender: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) => {
  const MINOR_LAG_THRESHOLD = 16;
  const SLOW_RENDER_THRESHOLD = 50;
  const CRITICAL_THRESHOLD = 100;

  console.groupCollapsed(`🔍 Profiler [${id}] - ${phase.toUpperCase()}`);
  console.log(`📌 Phase: ${phase}`);
  console.log(`⏱ Actual Duration: ${actualDuration.toFixed(2)}ms`);
  console.log(`⚡️ Base Duration: ${baseDuration.toFixed(2)}ms`);
  console.log(`⌛ Total Render Time: ${(commitTime - startTime).toFixed(2)}ms`);
  console.groupEnd();

  if (actualDuration > CRITICAL_THRESHOLD) {
    console.error(
      `🚨 CRITICAL: "${id}" took ${actualDuration.toFixed(2)}ms to render!`
    );
  } else if (actualDuration > SLOW_RENDER_THRESHOLD) {
    console.warn(`⚠️ Slow render in "${id}": ${actualDuration.toFixed(2)}ms`);
  } else if (actualDuration > MINOR_LAG_THRESHOLD) {
    console.info(`ℹ️ Minor delay in "${id}": ${actualDuration.toFixed(2)}ms`);
  }

  console.groupEnd();
};
