import React, {useEffect, useContext} from 'react';
import Aside from '../components/layouts/Aside';
import Navbar from '../components/layouts/Navbar';
import FormTarea from '../components/proyects/FormTarea';
import ListaTareas from '../components/proyects/ListaTareas';
import AuthContext from '../context/auth/AuthContext';

import ProyectoContext from '../context/proyectos/ProyectoContext';

const Proyects = (props) => {
     const {obtenerUsuario, cerrarSesion} = useContext(AuthContext);
     const proyectocontext = useContext(ProyectoContext);

     useEffect(()=>{
          obtenerUsuario();
          // eslint-disable-next-line
     },[])

     useEffect(()=>{
          if(proyectocontext.error === 'Token inválido' || proyectocontext.error === 'Acceso denegado'){
               cerrarSesion();
          }
          // eslint-disable-next-line
     },[proyectocontext.error]);
     return (
          <div className="container-proyects d-sm-flex">
               <Aside title="App Tasks"></Aside>
               <div className="col-sm-8 col-md-9 bg-secondary p-0">
                    <Navbar></Navbar>
                    <main className="main">
                         <FormTarea></FormTarea>
                         <ListaTareas></ListaTareas>
                    </main>
               </div>
          </div>
     );
}
 
export default Proyects;