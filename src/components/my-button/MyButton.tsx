import "./MyButton.css"
import {useState} from "react";

export default function MyButton(){

    const [count,setCount] = useState(0)

    const handleChick = ()=>{
        setCount(count+1)
    }


    return (
        <button onClick={handleChick}>我被点击了 {count} 次了</button>
    )
}



