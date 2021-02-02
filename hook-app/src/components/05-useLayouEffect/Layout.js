import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
import './style.css'

export const Layout = () => {
    const { counter, increment } = useCounter(1)
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    // console.log(data);
    
    const { quote } = !!data && data[0];
    // console.log(author, quote)
    const pTag = useRef()
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect())
    }, [pTag])
    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>
            
            <blockquote className="blockquote text-right">
                <p className="mb-0" ref={pTag} >{quote}</p>
            </blockquote>
                   
            <button 
                onClick={ increment }
                className="btn btn-primary"
            >
                Siguiente frase
            </button>
            
            
        </div>
    )
}
