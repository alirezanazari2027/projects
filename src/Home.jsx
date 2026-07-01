import Fruits from "./components/Fruits";
import Header from "./components/Header";

export default function Home() {
  const fruits = [
    {
      emoji: "🍎",
      name: "Apple",
      price: 90,
    },
    {
      emoji: "🍑",
      name: "Peach",
      price: 120,
    },
    {
      emoji: "🍍",
      name: "PineApple",
      price: 40,
    },
    {
      emoji: "🍒",
      name: "Cherries",
      price: 20,
    },
    {
      emoji: "🥝",
      name: "Kiwi",
      price: 40,
    },
    {
      emoji: "🍊",
      name: "Orange",
      price: 70,
    },
    {
      emoji: "🍐",
      name: "Pear",
      price: 140,
    },
    {
      emoji: "🍓",
      name: "StrawBerry",
      price: 80,
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col">
      <Header/>
      <div className="flex justify-between p-4 w-full"><Fruits fruits={fruits}/></div>
    </div>
  );
}
