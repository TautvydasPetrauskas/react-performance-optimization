import { CounterSectionComposition } from "./counter-section-composition.component";
import { UserProfile } from "./user-profile.component";

export const UserComposition = () => {
  const theme = { color: "blue", count: 1 };

  return (
    <div>
      <CounterSectionComposition />
      <UserProfile theme={theme} />
    </div>
  );
};
