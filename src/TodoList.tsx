import React from "react";
import classes from "./todo.module.css";

const TodoList = ({ todos, setTodos }) => {
  const handleComplete = (index) => {
    setTodos((todos) => {
      const newTodos = [...todos];
      const todo = newTodos[index];
      todo.completed = true;
      // newTodos[index] = todo;

      return newTodos;
    });
  };

  return (
    <div>
      <h1 style={classes.h1}>List</h1>
      {todos.length <= 0 ? (
        <div>No todos found. Please add one </div>
      ) : (
        <div>
          {React.Children.toArray(
            todos.map((todo, i) => (
              <div>
                <span
                  style={
                    todo.completed ? { textDecoration: "line-through" } : {}
                  }
                >
                  {todo.message}
                </span>
                <button onClick={() => handleComplete(i)}>✅</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
