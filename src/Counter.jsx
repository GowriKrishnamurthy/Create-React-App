import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p> This is our counter component!</p>
      <p>Count is : {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}> Decrement</button>
    </div>
  );
};

export default Counter;
