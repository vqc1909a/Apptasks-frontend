import React, {useState, useContext, useEffect} from 'react';
import Error from '../Error';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const Form = () => {
    const {registrarse, errorauth, ocultarError} = useContext(AuthContext);
    
    const [user, changeUser] = useState({
         name: '',
          email: '',
          password: '',
          confirm: '',
          error: ''
     });
     
     const {name, email, password, confirm, error} = user;

     useEffect(() => {
          changeUser({
               ...user,
               error: errorauth
          })
          // eslint-disable-next-line
     }, [errorauth])

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
          if(name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === ''){
               changeUser({
                    ...user,
                    error: 'Todos los campos son requeridos'
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
          if(password.trim() !== confirm.trim()){
               changeUser({
                    ...user,
                    error: 'Los passwords deben ser iguales'
               })
               return null;
          }
           changeUser({
                ...user,
                error: ''
           })
          //!Enviar al state
          registrarse(user)
     }  

     return (
     <form action="" onSubmit={handleSubmit}>
          {error ? <Error message={error}></Error> : null}
           <div className="form-group">
               <div className="row justify-content-center align-items-center">
                    <div className="col-sm-2">
                         <label htmlFor="name">Nombre</label>
                    </div>
                    <div className="col-sm-10">
                         <input value={name} type="text" name="name" className="form-control" placeholder="Tu Nombre" onChange={handleUser} />
                    </div>
               </div>
          </div>
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
          <div className="form-group">
               <div className="row justify-content-center align-items-center">
                    <div className="col-sm-2">
                         <label htmlFor="confirm">Confirmar Password</label>
                    </div>
                    <div className="col-sm-10">
                         <input value={confirm} type="password" name="confirm" className="form-control" placeholder="Repite Tu Password" onChange={handleUser} />
                    </div>
               </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Registrarse</button>
          <Link to="/" className="muted my-3 d-inline-block">Iniciar Sesión</Link>
     </form>    
     );
}
 
export default Form;