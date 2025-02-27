import { bigNumber } from "../../../defaults/values.default";
import { UserTheme } from "../interfaces/user.interface";

export interface UserProfileProps {
  theme: UserTheme;
}

export const UserProfile = ({ theme }: UserProfileProps) => {
  console.log("UserProfile re-rendered");

  const calculateExpensiveValue = () => {
    for (let i = 0; i < bigNumber; i++) {}

    return theme.count * 2;
  };

  return (
    <>
      <h1>User profile</h1>
      <div>Current Theme: {theme.color}</div>
      <div>Current Calculated Count: {calculateExpensiveValue()}</div>
    </>
  );
};
