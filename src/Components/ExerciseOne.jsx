import { useEffect, useState } from "react";

export default function ExerciseOne() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState();
  useEffect(() => {
    async function getData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let info = await data.json();
      setUsers(info);
      if (value) {
        info = info.filter((x) =>(x.name.toLowerCase().include(value.toLowerCase()))  
        );
      }
      console.log(info);
    }
    getData();
  }, [value]);
  return (
    <div className="w-full h-screen items-center flex flex-col">
      <div className="w-full flex  h-fit mx-auto text-center py-3 px-10 gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-10/12 py-2 px-2 rounded-md border outline-0"
          type="text"
        />
      </div>
      {users.length > 0 && (
        <div className="w-full mx-auto h-fit mt-2 flex flex-col text-3xl py-3 ">
          {users.map((y) => (
            <h1 key={y.id}>{y.name}</h1>
          ))}
        </div>
      )}
      {users.length === 0 && <h1>Something went wrong</h1>}
    </div>
  );
}
