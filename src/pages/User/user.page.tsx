import { UserComposition } from "./components/user-composition.component";
import { UserMemoized } from "./components/user-memoized.component";
import { UserUseMemo } from "./components/user-use-memo.component";
import { UserComponent } from "./components/user.component";

export const User = () => {
  return (
    <>
      <UserComponent />
      <hr />
      <UserUseMemo />
      <hr />
      <UserMemoized />
      <hr />
      <UserComposition />
    </>
  );
};
