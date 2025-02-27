import { createContext, useContext, useState, memo } from "react";

const ThemeContext = createContext("light");
const UserContext = createContext({
  userName: "Guest",
  setUserName: (name: string) => {},
});

const ComponentB = () => {
  const { userName, setUserName } = useContext(UserContext);
  console.log("ComponentB re-rendered");

  return (
    <div>
      <p>Current User: {userName}</p>
      <button
        onClick={() => setUserName(userName === "Guest" ? "Alice" : "Guest")}
      >
        Change User
      </button>
    </div>
  );
};

const ComponentC = memo(() => {
  const theme = useContext(ThemeContext);
  console.log("ComponentC re-rendered");

  return <p>Theme: {theme}</p>;
});

export const ContextOptimized = () => {
  const [userName, setUserName] = useState("Guest");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <ThemeContext.Provider value="light">
        <p>Optimized version</p>
        <ComponentB />
        <ComponentC />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};
