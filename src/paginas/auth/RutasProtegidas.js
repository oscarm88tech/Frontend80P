
// import { toBeChecked } from '@testing-library/jest-dom/matchers';
import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

const RutasProtegidas = ({element}) => {
    const[redirec, setRedirec] = useState (false);

    // funcion que nos diga si el token expiro
    const TokenExpirado = () => {
        const token = localStorage.getItem("token");
        if (!token){
            // si no tenemos un token nos envia a la pagina inicial (login)
            setRedirec(true);
            return;
        }
        // decodificar el token para obtener la fecha en que expiro
        const tokenD = JSON.parse(atob(token.split(".")[1]));
        const timeexp = tokenD.exp * 1000; // convertimos a milisegundos

        // obtener hora actual

        const actualTime = Date.now();

        if(actualTime >= timeexp){
            swal({
                title: 'Expiro su sesion',
                text: "Su sesion expiro, vuelva a iniciar sesion",
                icon: 'warning',
                buttons: {
                    confirm: {
                        text: 'ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
            setTimeout(() => {
                localStorage.removeItem("token");
                setRedirec(true);
            }, 1000);
            return;
        }

        
    };
    // verificamos el tiempo de expiracion cuando se monta el componente 
    useEffect(() => {
        const timeout = setInterval(TokenExpirado, 100);
        return() => clearInterval(timeout) // el limpia al desmontar el componente 
    }, []);
    if (redirec){
        return <Navigate to = "/login" />
    }
    // cuando se renderiza la ruta 
    return element;

  
};

export default RutasProtegidas
