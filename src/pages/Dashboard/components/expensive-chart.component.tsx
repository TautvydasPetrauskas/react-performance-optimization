import { calculateExpensiveValue } from "../../../helpers/value.helper";

export const ExpensiveChart = () => {
  return (
    <>
      <p>Rendering a very slow chart...</p>
      <p>{calculateExpensiveValue()}</p>
    </>
  );
};
