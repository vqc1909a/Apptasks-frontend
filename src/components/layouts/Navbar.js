import React, {useContext} from 'react';
import AuthContext from '../../context/auth/AuthContext';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Navbar = () => {
     const {cerrarSesion, user} = useContext(AuthContext);
     const proyectocontext = useContext(ProyectoContext);
     const tareacontext = useContext(TareaContext);

     const cerrar = () => {
          proyectocontext.limpiarEstados();
          tareacontext.limpiarEstados();
          cerrarSesion();
     }
     return (
          
          <header className="header bg-primary py-3 border-bottom border-white">
               <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                         <h2 className="text-white">Hola <span className="font-weight-bolder">{user.name}</span></h2>
                         <a href="#!" className="text-white" onClick={cerrar}>Cerrar Sesión</a>
                    </div>
               </div>
          </header>
     );
}
 
export default Navbar;