import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO,
    AGREGAR_PROYECTO
} from '../../types';
import uuid from 'uuid';

const proyectos = [
    { id: 1, nombre: 'Tienda Virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Diseño de Sitio web' }
]

const ProyectoState = props => {
    const initialState = {
        proyectos: [],
        formulario: false
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Seriede funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
    }


    // Agregar nuevo proyecto

    const agregarProyecto = proyecto =>{
        proyecto.id = uuid.v4();

        // Agregar proyecto al state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;