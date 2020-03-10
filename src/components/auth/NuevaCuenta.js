import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {


    
    const [ usuario, guardarUsuario ] = useState({
        email: '',
        password: '',
        nombre: '',
        confirmar: ''
    })

    const { email, password, confirmar,  nombre } = usuario; 

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // CUando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios

        // Password minimo de 6 caracteres

        // Los 2 passwords son iguales

        // Pasarlo al action


    }
    


    return ( 
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1> Crea una cuenta </h1>
            <form>

            <div className="campo-form">
                    <label htmlFor="email"> Nombre:</label>
                    <input
                     type="text"
                     id="nombre"
                     name="nombre"
                     value= { nombre }
                     placeholder="Tu Nombre"
                     onChange= { onChange }
                     />
                </div>

                <div className="campo-form">
                    <label htmlFor="email"> Email</label>
                    <input
                     type="email"
                     id="email"
                     name="email"
                     value= { email }
                     placeholder="Tu Email"
                     onChange= { onChange }
                     />
                </div>

                <div className="campo-form">
                    <label htmlFor="email"> Password</label>
                    <input
                     type="password"
                     id="password"
                     value= { password }
                     name="password"
                     placeholder="Tu Password"
                     onChange= { onChange }
                     />
                </div>

                <div className="campo-form">
                <label htmlFor="confirmar"> Confirmar Password</label>
                <input
                 type="password"
                 id="password"
                 value= { confirmar }
                 name="confirmar"
                 placeholder="Confirmar Password"
                 onChange= { onChange }
                 />
            </div>

                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block"
                    value="Registrarme" />
                    
                </div>
            </form>

            <Link to={'/'} className="enlace-cuenta">
            Volver a iniciar sesión
       </Link>
        </div>

    </div>

     );
}
 
export default NuevaCuenta;