import Fruit from "./Fruit";

export default function Fruits({fruits}){
    return(
        <div className="flex justify-between flex-wrap w-full gap-3">
            {
               fruits.map(fruit=>(
                <Fruit emoji={fruit.emoji} name={fruit.name} price={fruit.price}/>
               ))
               }
            
        </div>
    )
}