import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import TodoList from "./TodoList";

function App() {

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
  /*
  //counter
  const [showCounter, setShowCounter] = useState();

  return (
    <div className="App">
      <h1>Counter app</h1>
      <button onClick={()=>setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
        {showCounter && <Counter/>}
    </div>
  );*/
}

export default App;
