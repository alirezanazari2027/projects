import { useTheme } from "next-theme";
export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full py-4 px-5 mx-auto bg-gray-300 flex justify-between items-center">
        <h1 className="text-2xl text-cyan-500 dark:text-fuchsia-600">logo</h1>
        <div className="flex gap-3">
          <button
            className="py-3 px-6 rounded-lg bg-emerald-600 text-white "
            onClick={() => setTheme("light")}
          >
            Light Mode
          </button>
          <button
            className="py-3 px-6 rounded-lg bg-emerald-600 text-white "
            onClick={() => setTheme("dark")}
          >
            Dark Mode
          </button>
          <button
            className="py-3 px-6 rounded-lg bg-emerald-600 text-white "
            onClick={() => setTheme("system")}
          >
            System
          </button>
        </div>
      </div>
      <div className="w-full min-h-90% flex justify-center items-center">
        <div className="w-1/2 border border-b-lime-500 dark:border-b-purple-600 p-6 rounded-lg shadow-2xl">
          <h1 className="text-2xl">Hi dear, How Are You</h1>
          <p className="text-lg ">
            HI everyone, Today we have topic and my topic is about Nature.
          </p>
        </div>
      </div>
    </div>
  );
}
