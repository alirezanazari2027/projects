// import { useActionState } from "react";
import { useActionState } from "react";
import { getDataForm } from "../actions/ActionState";
import { 
  // useFormState,
   useFormStatus } from "react-dom";

export default function ExerciseFive() {
  const [data, func] = useActionState(getDataForm, {
    data: "",
    state: false,
  });
  const {loading} =  useFormStatus();
  return (
    <div className="w-full min-h-screen flex flex-col  justify-center items-center">
      <form 
        action={func}
        className="w-8/12 h-fit py-8 px-4 border flex flex-col rounded-md items-start"
      >
        <h1 className="text-3xl text-center mx-auto">Sign In</h1>
        <label htmlFor="">Name</label>
        <input
          className="w-full border mb-4 rounded-md outline-0 py-2 px-3 my-2"
          name="name"
          type="text"
        />
        <label htmlFor="">Email</label>
        <input
          className="w-full border rounded-md outline-0 py-2 px-3 my-2"
          name="email"
          type="email"
        />
        <input
          className="mt-4 w-full text-2xl py-3 px-8 bg-linear-150 from-cyan-500 to-purple-600 text-white rounded-md"
          type="submit"
          value={`${loading ? "Please wait" : "Save"}`}
        />
      </form>
      {
        !data.state && data.data.length > 0 &&(
          <div className="w-full flex justify-center">
            <h1 className="text-3xl font-semibold text-lime-500">Invalid Data</h1>
          </div>
        )}
      {data.data.length > 0 && (
        <div className="w-full h-fit py-4 px-4 flex justify-center items-center">
          <h1 className="text-3xl text-lime-500">{data.data}</h1>
        </div>
      )}
    </div>
  );
}
