import React, {useContext} from 'react';
import TareaContext from '../../context/tareas/TareaContext';
const Tarea = ({tarea}) => {
     const {eliminarTarea, cambiarEstado, obtenerTareaEditar} = useContext(TareaContext);

     const {name, estado, _id} = tarea;

     
     return (
          <li className="list-group-item d-flex justify-content-between align-items-center bg-white">
               <span className="font-weight-bolder">{name}</span>
               <div className="options d-flex">
                    {estado
                    ?
                    <button type="button" className="btn btn-success mx-2 btn-sm" onClick={() => cambiarEstado(_id)}>Completo</button>
                    :
                    <button type="button" className="btn btn-danger mx-2 btn-sm" onClick={() => cambiarEstado(_id)}>Incompleto</button>
                    }
                    <div className="btn-group btn-group-sm">
                         <button type="button" className="btn btn-primary" onClick={() => obtenerTareaEditar(tarea)}>Editar</button>
                         <button type="button" className="btn btn-secondary" onClick={() => eliminarTarea(_id)}>Eliminar</button>
                    </div>
               </div>
          </li>
     );
}
 
export default Tarea;