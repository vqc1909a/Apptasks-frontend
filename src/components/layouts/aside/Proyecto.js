import React, {useContext} from 'react';
import ProyectoContext from '../../../context/proyectos/ProyectoContext';


const Proyecto = ({proyecto}) => {

     const {seleccionarProyecto}  = useContext(ProyectoContext);
     const {name, _id} = proyecto;
    

     return (
          <li className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center" style={{cursor: 'pointer'}} onClick={() => seleccionarProyecto(_id)} >{name}
         </li> 
     );   
}
 
export default Proyecto;