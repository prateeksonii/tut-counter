import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TodoList from "./TodoList";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (values) => {
    const todo = {
      message: values.todo,
      completed: false,
      createdAt: Date.now(),
    };

    setTodos(() => [todo, ...todos]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  console.log(errors.todo);

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("todo", {
            required: true,
            minLength: {
              value: 3,
              message: "Todo is too short",
            },
          })}
        />
        {errors.todo && <div>{errors.todo.message}</div>}
        <button type="submit">Add</button>
      </form>

      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
