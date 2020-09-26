import React, {useContext} from 'react';
import ProyectoContext from '../context/proyectos/ProyectoContext';
import TareaContext from '../context/tareas/TareaContext';
import '../styles/ErrorGeneral.css';
const ErrorGeneral = () => {
     const proyectocontext = useContext(ProyectoContext);
     const tareacontext = useContext(TareaContext);
     if(proyectocontext.error === '' && tareacontext.error === '') return null;

     return (
          <div className="error-general">
               <p>{proyectocontext.error}</p>
               <p>{tareacontext.error}</p>
          </div>
     );
}
 
export default ErrorGeneral;