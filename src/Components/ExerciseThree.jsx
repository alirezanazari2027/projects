import { useDeferredValue, useMemo, useState } from "react";

export default function ExerciseThree() {
  const [value, setValue] = useState("");
  let delay = useDeferredValue(value);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 15000; i++) {
      l.push(delay);
    }
    return l;
  }, [delay]);
  return (
    <div className="w-full h-fit flex flex-col px-6 py-2 flex-wrap">
      <div className="w-full py-3">
        <input
          className="border rounded-md w-full py-3 px-4"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="w-full flex gap-3 flex-wrap px-2 h-fit">
        {list.map((l, index) => (
          <h1 key={index}>{l}</h1>
        ))}
      </div>
    </div>
  );
}
