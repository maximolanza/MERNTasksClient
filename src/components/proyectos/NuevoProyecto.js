import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    // Extraer nombre del proyecto
    const { nombre } = proyecto;

    // Lee contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onClickFormulario = () => {
        mostrarFormulario();
    }
    return (


        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
                >Nuevo Proyecto</button>

            {
                formulario
                    ?

                    (
                        <form
                            className="formulario-nuevo-proyecto"
                        >
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Nombre proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar PRoyecto"
                            />

                        </form>
                    )

                    :
                    (
                        null
                    )
                }
        </Fragment>
    );
}

export default NuevoProyecto;