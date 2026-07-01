import { useRef, useState } from "react";

export default function Q1() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  function handleClick() {
    setCount(count + 1);
    ref.current.className.add("bg-red-500");
  }
  return (
    <div
      ref={ref}
      className="h-screen w-full flex-col flex justify-center items-center bg-emerald-500"
    >
      <button
        onClick={() => handleClick()}
        className="hover:cursor-pointer hover:bg-gray-200 text-2xl py-2 px-5 bg-white rounded-lg"
      >
        Click to Change The BackgroundColor
      </button>
      <h1 className="text-4xl text-white">{count}</h1>
    </div>
  );
}
