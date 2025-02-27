import { ThemeSwitcherOptimized } from "./components/theme-switcher-optimized.component";
import { ThemeSwitcher } from "./components/theme-switcher.component";

export const Theming = () => {
  return (
    <div>
      <p>Theme page to test useState hook</p>
      <ThemeSwitcher />
      <ThemeSwitcherOptimized />
    </div>
  );
};
