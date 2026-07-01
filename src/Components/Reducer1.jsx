import { useReducer, useState } from "react";

let products = [
  {
    name: "Galaxy G5 Prime",
    price: 10000,
  },
  {
    name: "Galaxy G6 Prime",
    price: 13000,
  },
  {
    name: "Galaxy G7 Prime",
    price: 18000,
  },
  {
    name: "Galaxy G8 Prime",
    price: 100000,
  },
];
const reducer = (data, func) => {
  if (func.type === "add") {
    return [...data, func.payload];
  } else if (func.type === "delete") {
    return [...data, data.filter((x) => x.name !== func.payload)];
  }
};
export default function Reducer1() {
  const [data, action] = useReducer(reducer, products);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function handleSave() {
    action({ type: "add", payload: { name, price } });
  }

  function handleDelete(productName) {
    action({ type: "delete", payload: productName });
  }
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full py-4 flex px-6 gap-2">
        <input
          className="py-2 px-3 border rounded-md bg-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter The name of The product"
        />
        <input
          className="py-2 px-3 border rounded-md bg-white"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter The price of The product"
        />
        <button
          className="py-2 px-5 bg-blue-500 text-white rounded-md"
          type="submit"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="w-full gap-4 px-6 py-4 h-fit grid grid-cols-2">
        {data.map((x, index) => (
          <div className="py-4 px-6 bg-white border rounded-md " key={index}>
            <h1 className="text-5xl">{x.name}</h1>
            <p>{x.price}</p>
            <button onClick={handleDelete(x.name)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-4xl">The total of all Products is:</p>
        <h1 className="text-center text-3xl text-red-500 underline">
          {data.reduce((total, data) => (total += data.price), 0)}
        </h1>
      </div>
    </div>
  );
}
