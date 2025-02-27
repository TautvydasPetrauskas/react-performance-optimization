import { createContext, memo, useContext, useState } from "react";

const AppContext = createContext({
  theme: "light",
  userName: "Guest",
  setUserName: (name: string) => {},
});

const ComponentB = () => {
  const { userName, setUserName } = useContext(AppContext);
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
  const { theme } = useContext(AppContext);
  console.log("ComponentC re-rendered");

  return <p>Theme: {theme}</p>;
});

export const ContextNonOptimized = () => {
  const [userName, setUserName] = useState("Guest");

  return (
    <AppContext.Provider value={{ theme: "light", userName, setUserName }}>
      <p>Non-optimized version</p>
      <ComponentB />
      <ComponentC />
    </AppContext.Provider>
  );
};
