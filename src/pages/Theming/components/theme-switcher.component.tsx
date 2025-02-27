import { useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  console.log(`Component re-rendered with theme: ${theme}`);

  return (
    <div className={theme}>
      <p>Current Theme non-optimized: {theme}</p>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
