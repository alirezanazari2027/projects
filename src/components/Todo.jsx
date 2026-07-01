import { useState } from "react";
import Header from "./header";
import DisplayTodo from "./DisplayTodo";
export default function Todo() {
  const [todo, setTodo] = useState({ todo: "", completed: false });
  const [todos, setTodos] = useState([]);
  function controlSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ todo: "", completed: false });
  }
  const sortedTodos = todos.slice().sort((a, b) => {
    return Number(a.completed) - Number(b.completed);
  });
  const filterA = todos.filter((item) => {
    return item.completed === true;
  });
  return (
    <div className="w-full h-screen text-center space-y-5 ">
      <div className="w-full h-fit">
        <Header />
        <form onSubmit={controlSubmit} className=" lg:w-[68%] md:w-[70%] w-[85%] mx-auto py-3 px-4">
          <input
            value={todo.todo}
            type="text"
            onChange={(e) =>
              setTodo({ ...todo, todo: e.target.value, completed: false })
            }
            className="border-b focus:outline-0 w-[70%] py-3"
          />
          <button className="lg:py-3 lg:px-6 lg:text-xl text-sm py-2 px-4 bg-blue-500 fucus:outline-0 rounded-tr-4xl rounded-br-4xl animation1 text-white active:text-red-600 transition-all duration-100">
            SAVE
          </button>
        </form>
      </div>
      <div className="pb-22">
        {sortedTodos.map((item) => (
          <DisplayTodo
            todo={item.todo}
            check={item.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="w-full h-20  bg-blue-600 fixed bottom-0 text-white items-center lg:text-3xl md:text-2xl text-xl flex justify-between px-8 font-bold">
        <div>
          <h1>All Tasks: {todos.length}</h1>
        </div>
        <div>
          <h1>Complated Tasks: {filterA.length}</h1>
        </div>
      </div>
    </div>
  );
}
