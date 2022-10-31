import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counterSlice";

const Counter = () => {
    const counterValue = useSelector( state => state.counterValue );
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch( counterActions.increment() );
    };

    const decrementHandler = () => {
        dispatch( counterActions.decrement() );
    };

    const resetHandler = () => {
        dispatch( counterActions.resetValue() );
    };


    return(
        <div className="countainer">
            <div className="field">
                <h2>{counterValue}</h2>
            </div>
            <div className="button field">
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;