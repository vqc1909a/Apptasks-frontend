import React, {useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from '../aside/Proyecto'

import ProyectoContext from '../../../context/proyectos/ProyectoContext';

const ListaProyectos = ({title}) => {
     const {proyectos, obtenerProyectos} = useContext(ProyectoContext);

     useEffect(()=>{
          obtenerProyectos();
          // eslint-disable-next-line
     },[])
     
     return (
          <div className="lista-proyectos my-5">
               <h2 className="text-capitalize font-weight-bolder my-3 text-white text-center">{title}</h2>
               <ul className="list-group list-group-flush">
                    {proyectos.length === 0
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
                    }
               </ul>
          </div>     
     );
}
 
export default ListaProyectos;