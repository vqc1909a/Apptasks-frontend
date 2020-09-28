import React, {useContext} from 'react';
import AuthContext from '../../context/auth/AuthContext';
const Navbar = () => {
     const {cerrarSesion, user} = useContext(AuthContext);

     return (
          
          <header className="header bg-primary py-3 border-bottom border-white">
               <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                         <h2 className="text-white">Hola <span className="font-weight-bolder">{user.name}</span></h2>
                         <a href="#!" className="text-white" onClick={cerrarSesion}>Cerrar Sesión</a>
                    </div>
               </div>
          </header>
     );
}
 
export default Navbar;