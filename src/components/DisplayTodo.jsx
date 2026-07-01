import { useState } from "react";

export default function DisplayTodo({ todo, check, todos, setTodos }) {
  function handleChange(name) {
    const newTodos = todos.map((item) => {
      return item.todo === name
        ? { ...item, completed: !item.completed }
        : item;
    });
    setTodos(newTodos);
  }
  function handleDelete(todoName) {
    const newT = todos.filter((item) => {
      return item.todo !== todoName;
    });
    setTodos(newT);
  }
  const changeStyle = check? "done":"";
  return (
    <div className="w-[50%] text-center h-18 flex justify-center items-center mx-auto border-b py-2 overflow-y-hidden">
      <div className="flex space-x-5 text-2xl py-2.5 w-[90%]">
        <input
          onChange={() => handleChange(todo)}
          checked={check}
          type="checkbox"
          className="form-checkbox h-4 w-4 bg-green-500 mt-2  "
        />
        <h1 className={changeStyle}>{todo}</h1>
      </div>
      <i onClick={() => handleDelete(todo)} className="fas fa-trash lg:text-xl md:text-[18px] text-sm"></i>
    </div>
  );
}
