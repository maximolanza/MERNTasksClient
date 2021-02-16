import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTO 
} from '../../types';


const proyectos = [  
    { id: 1, nombre: 'Tienda Virtual'},
{ id: 2, nombre: 'Intranet'},
{ id: 3, nombre: 'Diseño de Sitio web'}];

const ProyectoState= props =>{
    const initialState = {
        proyectos : [ ],
        formulario : false
    }

    // Dispatch para ejecutar las acciones

    const [ state, dispatch ] = useReducer( proyectoReducer, initialState )

    // Seriede funciones para el CRUD

    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = proyectos => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
    }


    return (
        <proyectoContext.Provider
        value={{
            proyectos : state.proyectos,
            formulario: state.formulario,
            mostrarFormulario,
            obtenerProyectos
        }}>
            { props.children }
        </proyectoContext.Provider>
    )
}

export default ProyectoState;