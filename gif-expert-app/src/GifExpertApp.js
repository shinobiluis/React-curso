// rafc
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([ 'One punch' ])

    // const handleAdd = () => {
    //     // metodo 1
    //     // setCategories([...categories, 'hola']);
    //     // metodo 2
    //     setCategories( cats => [ ...cats, 'hola' ] )
    // }

    return (
        <div>
            <h2>Gif Espert app</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                { 
                    categories.map( category => {
                        return <GifGrid 
                                category={category}
                                key={category}
                            ></GifGrid>
                    })
                }
            </ol>
        </div>
    )
}