import { bigNumber } from "../../../defaults/values.default";
import { UserProfileProps } from "../user.page";

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
