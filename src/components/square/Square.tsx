interface SquareProps {
    value:string | null
    onSquareClick:()=>void
}
export default function Square({value,onSquareClick}:SquareProps) {
    return <button onClick={onSquareClick} className="square">{value}</button>
}





