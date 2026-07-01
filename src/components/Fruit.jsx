export default function Fruit({emoji , name , price}){
    return(
        <div className="flex justify-between bg-gray-300 h-fit flex-col text-center py-4 px-8">
            <h1 className="text-6xl p-2">{emoji}</h1>
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="text-[16px] text-gray-500">{price}AFG</h3>
        </div>
    )
}