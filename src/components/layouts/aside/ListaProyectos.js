import React, {useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from '../aside/Proyecto'
import Spinner from '../../../components/Spinner';
import ProyectoContext from '../../../context/proyectos/ProyectoContext';

const ListaProyectos = ({title}) => {
     const {proyectos, obtenerProyectos, spinner} = useContext(ProyectoContext);

     useEffect(()=>{
          obtenerProyectos();
          // eslint-disable-next-line
     },[])
     
     return (
          <div className="lista-proyectos my-5">
               <h2 className="text-capitalize font-weight-bolder my-3 text-white text-center">{title}</h2>
               <ul className="list-group list-group-flush">
                    
                    {!spinner 
                    ?
                         proyectos.length === 0
                         ?
                         <li className="list-group-item bg-transparent text-white">No tienes ningún proyecto agregado</li>
                         :
                         <TransitionGroup className="proyectos">
                              {proyectos.map(proyecto=> 
                                   <CSSTransition key={proyecto._id} timeout={500} classNames="proyecto">
                                        <Proyecto proyecto={proyecto}></Proyecto>
                                   </CSSTransition>
                              )}
                         </TransitionGroup>
                    :
                    <Spinner></Spinner>
                    }
                    
               </ul>
          </div>     
     );
}
 
export default ListaProyectos;