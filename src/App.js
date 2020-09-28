import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Signin from './views/Signin';
import Signup from './views/Signup';
import Proyectos from './views/Proyects';

import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/TareaState';
import AuthState from './context/auth/AuthState';

import ErrorGeneral from './components/ErrorGeneral';
import ProyectsPrivateRoute from './components/rutasprivadas/ProyectsPrivateRoute';
import AuthPrivateRoute from './components/rutasprivadas/AuthPrivateRoute';


function App() {
  return (
    <AuthState>
      <ProyectoState>
        <TareaState>
          <Router>
            <ErrorGeneral></ErrorGeneral>
            <Switch>
              <AuthPrivateRoute exact path="/" component={Signin}></AuthPrivateRoute>
              <AuthPrivateRoute exact path="/signup" component={Signup}></AuthPrivateRoute>
              <ProyectsPrivateRoute exact path="/proyectos" component={Proyectos}></ProyectsPrivateRoute>
            </Switch>
          </Router>
        </TareaState>
      </ProyectoState>
    </AuthState>
  )
}

export default App;
