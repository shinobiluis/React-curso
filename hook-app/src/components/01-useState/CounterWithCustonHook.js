import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustonHook = () => {
    const {state, increment, decrement, reset} = useCounter( 100 )
    return (
        <div>
            <h1>Conter with hook { state } </h1>
            <hr></hr>
            <button 
                onClick={ () => { increment(2) } }
                className="btn btn-primary"> +1 </button>
            <button 
                onClick={ () => { decrement(2) } }
                className="btn btn-primary"> -1 </button>
            <button 
                onClick={ reset }
                className="btn btn-primary"> Reset </button>
        </div>
    )
}
