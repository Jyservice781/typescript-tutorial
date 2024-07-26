import {useState} from "react";

let Counter = () => {
    // useState 는 제네릭을 생략해도 똑똑하게 인식해서 생략해도 상관없다.
    let [number, setNumber] = useState<number>(0)
    let onPlus = () => setNumber(number + 1)
    let onMinus = () => setNumber(number - 1)

    return (
        <div
            style={{display:'flex',
                justifyContent:'space-evenly'
        }}>
            <button onClick={onPlus}>+</button>
            <h1>{number}</h1>
            <button onClick={onMinus}>-</button>
        </div>
    )
}

export default Counter;