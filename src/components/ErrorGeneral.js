import React, {useContext} from 'react';
import ProyectoContext from '../context/proyectos/ProyectoContext';
import '../styles/ErrorGeneral.css';
const ErrorGeneral = () => {
     const proyectocontext = useContext(ProyectoContext);
     if(proyectocontext.error === '') return null;

     return (
          <div className="">
               {/* <p>{proyectocontext.error}</p> */}
          </div>
     );
}
 
export default ErrorGeneral;