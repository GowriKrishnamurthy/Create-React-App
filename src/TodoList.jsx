import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState();

  // componentDidMount
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 10,
        },
      })
      .then((res) => {
        const responseToDos = res.data;
        setTodos(responseToDos);
      });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {todos &&
        todos.map((todo) => {
          const { id, userId, title } = todo;
          return (
            <div key={id}>
              <h5>{title}</h5>
              <h6>Assigned to user: {userId}</h6>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
