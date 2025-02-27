import { useState } from "react";

export const ThemeSwitcherOptimized = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  console.log(`Component re-rendered with theme: ${theme}`);

  const toggleTheme = (newTheme: "light" | "dark") => {
    theme !== newTheme && setTheme(newTheme);
  };

  return (
    <div className={theme}>
      <p>Current Theme Optomized: {theme}</p>
      <button onClick={() => toggleTheme("light")}>Light Mode</button>
      <button onClick={() => toggleTheme("dark")}>Dark Mode</button>
    </div>
  );
};
