import { useMemo, useState } from "react";

export default function Memo() {
  const [isDark, setIsDark] = useState(false);
  const [value, setValue] = useState(0);
  const number = useMemo(() => {
    return timeConsuming(value);
  }, [value]);
  return (
    <div
      className={`w-full h-fit px-18 py-30 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <input
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="py-2 px-3 border rounded-md"
        type="number"
      />
      <h1 className="text-2xl">{number}</h1>
      <button
        className="py-2 px-6 bg-emerald-500 text-white rounded-md text-2xl"
        onClick={() => setIsDark(!isDark)}
      >
        toggle Theme
      </button>
    </div>
  );
}

function timeConsuming(number) {
  for (let i = 0; i < 200000000; i++) {}
  return number * 2;
}
