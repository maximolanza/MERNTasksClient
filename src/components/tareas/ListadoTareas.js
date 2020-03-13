import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyeto = [
        { nombre: 'Elegir Plataforma',  estado: true},
        { nombre: 'Elegir Colores',  estado: false},
        { nombre: 'Elegir Plataformas de pago',  estado: false},
        { nombre: 'Elegir Hosting',  estado: true},

    ]
    return ( 
       <Fragment>
       <h2> Proyecto: Tienda Virtual</h2>
       <ul className="listado-tareas">
        { tareasProyeto.length === 0
            ? (<li className="tarea"><p>No hay tareas</p></li>)
            :  tareasProyeto.map(
               tarea => (
               <Tarea 
                    key={ tarea.nombre }
                    tarea={ tarea }
                /> 
            ))

        }
       </ul>

       <button  
        type="button"
        className="btn btn-eliminar"
        >Eliminar Proyecto</button>
       </Fragment>
     );
}
 
export default ListadoTareas;