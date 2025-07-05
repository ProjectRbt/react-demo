import './App.css'
import MyButton from "./components/my-button/MyButton.tsx";
import {useState} from "react";

function App() {


    const [count,setCount] = useState(0)

    return (
        <div>
            <h1>共同更新的计数器</h1>
            <MyButton count={count} setCount={()=> setCount(count+1)}/>
            <br/>
            <MyButton count={count} setCount={()=> setCount(count+1)}/>
        </div>
    )
}

export default App
