
import "./MyButton.css"

export default function MyButton(){

    const handleChick = ()=>{
        alert('You clicked me!');
    }


    return (
        <button onClick={handleChick}>我是个按钮</button>
    )
}



