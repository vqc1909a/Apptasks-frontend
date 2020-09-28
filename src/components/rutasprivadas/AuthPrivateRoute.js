import React, {useContext} from 'react';
import AuthContext from '../../context/auth/AuthContext';
import {Route, Redirect} from 'react-router-dom';

const AuthPrivateRoute = ({component: Component, ...props}) => {
     const {token} = useContext(AuthContext);
     return (
          <Route {...props} render={props => token
               ?
               <Redirect to='/proyectos'></Redirect>
               :
               <Component {...props}></Component>
          }></Route>
     )
}
export default AuthPrivateRoute;