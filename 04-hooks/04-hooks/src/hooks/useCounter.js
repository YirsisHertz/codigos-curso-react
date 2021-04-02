import { useState } from "react";

export const useCounter = (initialValue, range = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + range);
  };

  const decrement = () => {
    setCounter(counter - range);
  };

  return [counter, increment, decrement];
};
