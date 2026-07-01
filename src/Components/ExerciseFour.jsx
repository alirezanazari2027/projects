import { useState, useTransition } from "react";
export default function ExerciseFour() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  let [loading, startTransition] = useTransition();
  function handleChange(event) {
    setValue(event.target.value);
    const l = [];
    startTransition(() => {
      for (let i = 0; i < 20000; i++) {
        l.push(value);
      }
      setList(l);
    });
  }
  return (
    <div className="w-full h-fit flex flex-col px-6 py-2 flex-wrap">
      <div className="w-full py-3">
        <input
          className="border rounded-md w-full py-3 px-4"
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="w-full flex gap-3 flex-wrap px-2 h-fit">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <div className="h-14 w-14 border-b-2 border-r-2 border-l-2 rounded-full border-blue-600 animate-spin"></div>
          </div>
        ) : (
          list.map((l, index) => <h1 key={index}>{l}</h1>)
        )}
      </div>
    </div>
  );
}
