import React from 'react';

const Tarea = ({ tarea }) => {

    const { nombre, estado } = tarea;
    return (
        <li className="tarea sombre">
            <p> {nombre}</p>

            <div className="estado">
                {estado
                    ? (<button
                        type="button"
                        className="completo"
                    >Completo</button>)
                    :
                    (<button
                        type="button"
                        className="incompleto"
                    >Incompleto</button>)
            }
            </div>
            <div className="acciones">
                <buton
                type="button"
                className="btn btn-primario">
                Editar
                </buton>

                <buton
                type="button"
                className="btn btn-secundario">
                Eliminar
                </buton>
            </div>

        </li>
    );
}

export default Tarea;