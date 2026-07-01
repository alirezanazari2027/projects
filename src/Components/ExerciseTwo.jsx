import { motion } from "framer-motion";
export default function ExerciseTwo() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center">
      <div className="w-full h-screen"></div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, fontSize: "50px" }}
        transition={{ duration: 0.8 }}
        className=" py-5 px-7 h-screen w-full bg-red-500 rounded-2xl text-cyan-300"
      >
        <h1 className="text-3xl shadow-2xl font-bold">Hi Dear</h1>
      </motion.div>
    </div>
  );
}
