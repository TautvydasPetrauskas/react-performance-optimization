import { useMemo } from "react";
import { bigNumber } from "../../../defaults/values.default";
import { UserProfileProps } from "./user-profile.component";

export const UserProfileUseMemo = ({ theme }: UserProfileProps) => {
  console.log("UserProfile with useMemo for calculation re-rendered");

  const calculateExpensiveValue = useMemo(() => {
    for (let i = 0; i < bigNumber; i++) {}

    return theme.count * 2;
  }, [theme.count]);

  return (
    <>
      <h1>User profile</h1>
      <div>Current Theme: {theme.color}</div>
      <div>Current Calculated Count: {calculateExpensiveValue}</div>
    </>
  );
};
