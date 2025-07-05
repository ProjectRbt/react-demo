import "./MyButton.css"

interface MyButtonProps {
    count:number
    setCount:()=>void
}


export default function MyButton({count,setCount}:MyButtonProps){

    return (
        <button onClick={setCount}>我被点击了 {count} 次了</button>
    )
}



