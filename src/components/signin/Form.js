import React, {useState, useEffect, useContext} from 'react';
import Error from '../Error';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';


const Form = () => {
    const {iniciarSesion, errorauth, ocultarError} = useContext(AuthContext);

     const [user, changeUser] = useState({
          email: '',
          password: '',
          error: ''
     });

     const {email, password, error} = user;

     
     useEffect(() => {
          changeUser({
               ...user,
               error: errorauth
          })
          // eslint-disable-next-line
     }, [errorauth]);

     useEffect(() => {
          ocultarError();
          // eslint-disable-next-line 
     }, [])
     

     const handleUser = (e) => {
          changeUser({
               ...user,
               [e.target.name]: e.target.value
          })
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          ocultarError();
          if(email.trim() === '' || password.trim() === ''){
                changeUser({
                     ...user,
                    error: 'Todos los campos son obligatorios'
                })
               return null;
          }
          changeUser({
               ...user,
               error: ''
          })
          if(password.trim().length < 8){
               changeUser({
                    ...user,
                    error: 'El password debe ser como mínimo de 8 caracteres'
               })
               return null;
          }
          changeUser({
               ...user,
               error: ''
          })
          //!Enviar al state
          iniciarSesion(user);

     }  

     return (
     <form action="" onSubmit={handleSubmit}>
          {error ? <Error message={error}></Error> : null}
          <div className="form-group">
               <div className="row justify-content-center align-items-center">
                    <div className="col-sm-2">
                         <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-sm-10">
                         <input value={email} type="text" name="email" className="form-control" placeholder="Tu Email" onChange={handleUser} />
                    </div>
               </div>
          </div>
          <div className="form-group">
               <div className="row justify-content-center align-items-center">
                    <div className="col-sm-2">
                         <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-sm-10">
                         <input value={password} type="password" name="password" className="form-control" placeholder="Tu Password" onChange={handleUser} />
                    </div>
               </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Iniciar Sesión</button>
          <Link to="/signup" className="muted my-3 d-inline-block">Registrarse</Link>
     </form>    
     );
}
 
export default Form;