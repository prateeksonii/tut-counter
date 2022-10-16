import { useEffect, useState } from "react";

export const useCounter = () => {
  let [count, setCount] = useState(0);
  let [won, setWon] = useState(false);

  const increase = (inc) => {
    setCount((count) => count + inc);
  };

  useEffect(() => {
    if (count == 3) {
      setWon(true);
    }
  }, [count]);

  return { count, won, increase };
};

const App = () => {
  const { count, increase, won } = useCounter();

  return (
    <div>
      app: {count}
      <button onClick={() => increase(1)}>+1</button>
      <button onClick={() => increase(5)}>+5</button>
      <div style={{ border: "1px solid red" }}>{won.toString()}</div>
    </div>
  );
};

export default App;
