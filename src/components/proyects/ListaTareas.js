import React, {Fragment, useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Tarea from '../proyects/Tarea';

import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const ListaTareas = () => {
     const {proyecto, eliminarProyecto} = useContext(ProyectoContext);
     const {name, _id} = proyecto;
     const {tareasproyecto, obtenerTareas, tareas, obtenerTodasTareas} = useContext(TareaContext);

     useEffect(()=>{
          obtenerTodasTareas();
          // eslint-disable-next-line
     },[])
     useEffect(() => {
          obtenerTareas(_id);
          // eslint-disable-next-line
     }, [proyecto, tareas]);

     let component;
     if (Object.keys(proyecto).length === 0){
          component =  <h3 className="font-weight-bolder text-center text-white mb-4 text-capitalize">Seleccione Un Proyecto</h3>
     }else{
          component = 
                    <Fragment>
                         <h3 className="font-weight-bolder text-center text-white mb-4 text-capitalize">Proyecto: {name}</h3>
                         <div className="row justify-content-center">
                              <div className="col col-md-10 col-lg-8">
                                   <ul className="list-group list-group-flush">
                                        {tareasproyecto.length === 0
                                        ?
                                        <li className="list-group-item bg-transparent text-white">No tienes ninguna tarea agregada</li>
                                        :
                                        <TransitionGroup className="tareas">    
                                             {tareasproyecto.map(tarea => 
                                                  <CSSTransition
                                                       key={tarea._id}
                                                       timeout={500}
                                                       classNames="tarea"
                                                  >
                                                       <Tarea  tarea={tarea}></Tarea>
                                                  </CSSTransition>
                                             )}
                                        </TransitionGroup>
                                        }
                                   </ul>
                              </div>
                         </div>
                         <button type="button" className="btn btn-primary btn-lg mt-3" onClick={() => eliminarProyecto(_id)}>Eliminar proyecto <i className="fas fa-minus-circle ml-2"></i></button>
                    </Fragment>
     }
     return (
          <div className="lista-tareas py-4">
               <div className="container">
                  {component}
               </div>
          </div>
     );
}
 
export default ListaTareas;