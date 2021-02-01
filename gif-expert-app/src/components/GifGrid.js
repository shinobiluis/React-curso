import React, { useState, useEffect, Fragment } from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const {data:images, loading} = useFetchGifs( category );
    console.log(loading)
    // const [images, setImages] = useState([])

    

    
    // getGifs();
    return (
        <Fragment>
            <h3> { category } </h3>
            { loading && <p>loading</p> }
            <div className="card-grid">
                
                {
                    images.map( img =>  {
                        return <GifGridItem 
                                key={img.id} 
                                { ...img } 
                            />
                    })
                }
                
            </div>
        </Fragment>
    )
}
