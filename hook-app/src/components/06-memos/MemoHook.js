import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter.js'
import { procesoPesado } from '../../helpers/procesoPesado'


export const MemoHook = () => {
    const {counter, increment} = useCounter(1000)
    const [show, setShow] = useState(true)

    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo hook</h1>
            <h3>Memos { counter } </h3>
            <hr />
            <p>{ memoProcesoPesado }</p>
            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick={ () => {
                    setShow(!show)
                } }
            >
                show/hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
