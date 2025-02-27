import { bigNumber } from "../defaults/values.default";

export const calculateExpensiveValue = () => {
  for (let i = 0; i < bigNumber; i++) {}

  console.log("Expensive value calculated");

  return Math.floor(Math.random() * 100);
};
