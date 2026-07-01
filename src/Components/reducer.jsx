import { ArrowBigDown, ArrowBigUp, Hand } from "lucide-react";
import { useReducer } from "react";
let initialValue = { agree: 0, disagree: 0 };
export default function Reducer() {
  const [value, setValue] = useReducer(reducer, initialValue);
  function reducer(value, action) {
    if (action.type === "agree") {
      return { ...value, agree: value.agree + action.payload };
    } else if (action.type === "disagree") {
      return { ...value, disagree: value.disagree + action.payload };
    } else {
      return initialValue;
    }
  }
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center">
      <div className="w-fit flex justify-around border p-4 rounded-md my-2">
        <h1 className="text-3xl">{value.agree}</h1>
        <button
          className="p-2"
          onClick={() => setValue({ type: "agree", payload: 1 })}
        >
          <ArrowBigUp />
        </button>
        <h1 className="text-3xl">{value.disagree}</h1>
        <button
          className="p-2"
          onClick={() => setValue({ type: "disagree", payload: 1 })}
        >
          <ArrowBigDown />
        </button>
      </div>
      <button
        className="py-3 px-6 rounded-md text-white bg-fuchsia-500"
        onClick={() => setValue({ type: "reset" })}
      >
        reset
      </button>
    </div>
  );
}
