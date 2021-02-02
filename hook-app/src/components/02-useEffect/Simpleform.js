import React, { useEffect, useState } from 'react'
import './effects.css'

export const Simpleform = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( ()=> {
        console.log('hey')
    }, [])

    useEffect( ()=> {
        console.log('formulario cambio')
    }, [formState])

    useEffect( ()=> {
        console.log('El email cambio')
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]:  target.value
        })
    }

    return (
        <div>
            <h1>UseEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
        </div>
    )
}
