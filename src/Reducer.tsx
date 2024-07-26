import {useReducer} from "react";

type Action = {type: 'PLUS', size: number} | {type: 'MINUS', size: number}

let reducer = (state:number, action:Action) => {
    switch (action.type) {
        case 'PLUS' :
            return state + action.size;
        case 'MINUS':
            return state - action.size;
        default:
            throw new Error( ' 등록되지 않은 액션을...? ')
    }
}

let Reducer = () => {
    let [number, dispatch] = useReducer(reducer, 0)
    let onPlus = () => dispatch({type: 'PLUS', size: 20})
    let onMinus = () => dispatch({type: 'MINUS', size: 20})

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

export default Reducer