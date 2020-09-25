import React from 'react';
import FormProyecto from './aside/FormProyecto';
import ListaProyectos from '../layouts/aside/ListaProyectos'
const Aside = ({title}) => {
     
     return (
          <aside className="sidebar col-sm-4 col-md-3 bg-primary border-right border-white">
               <header className="aside-head py-3">
                    <h1 className="text-white text-center font-weight-bolder">{title}</h1>
               </header>
               <FormProyecto></FormProyecto>
               <ListaProyectos title="Tus proyectos"></ListaProyectos>
          </aside>
     );
}
 
export default Aside;