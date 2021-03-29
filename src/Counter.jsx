import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  useEffect(()=>
  {
      console.log('The component has mounted');
      return()=>{console.log('The component has unmounted');}
  },[])

  return (
    <div>
      <p> This is our counter component!</p>
      <p> Current Count : {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}> Decrement</button>
    </div>
  );
};

export default Counter;
