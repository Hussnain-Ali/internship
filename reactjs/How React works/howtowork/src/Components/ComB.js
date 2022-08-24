import React, { useReducer } from 'react'

const ComB = () => {
    // const reducer = ((state, action) => {
    //     if (action.type === 'increment') {
    //         return state + 1;
    //     }
    //     if (action.type === 'decrement') {
    //         return state - 1;
    //     }
    // })
    // const initialvalue = 0;
    // const [state, dispatch] = useReducer(reducer, initialvalue)

    // function incrementhandler() {
    //     dispatch({ type: "increment" })
    // }
    // const decrementHandler = () => {
    //     dispatch({ type: "decrement" })
    // }

    return (
        < div >
            {state}

            <button onClick={incrementhandler}>Plus</button>
            <button onClick={decrementHandler}>minus</button>
        </div >
    )
}

export default ComB