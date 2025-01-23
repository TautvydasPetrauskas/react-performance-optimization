export const SuperIncrementButton = ({
  handleClick,
}: {
  handleClick: () => void;
}) => {
  console.log("SuperIncrementButton re-rendered");
  return <button onClick={handleClick}>Super Increment</button>;
};
