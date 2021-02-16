import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    })

    // Extraer nombre del proyecto
    const { nombre } = proyecto;

    // Lee contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    return ( 
    <Fragment>
    <btton
                type="button"
                className="btn btn-block btn-primario"
                >Nuevo Proyecto</btton>
    <form
    className="formulario-nuevo-proyecto"
    >   
    <input  
        type="text"
        className="input-text"
        placeholder="Nombre proyecto"
        name="nombre"
        value= { nombre }
        onChange= { onChangeProyecto }
    />
    <input 
        type="submit"
        className="btn btn-primario btn-block"
        value="Agregar PRoyecto"
    />

    </form>
</Fragment>
                );
}
 
export default NuevoProyecto;