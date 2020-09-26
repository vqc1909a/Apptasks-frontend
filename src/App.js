import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signin from './views/Signin';
import Signup from './views/Signup';
import Proyects from './views/Proyects';

import ProyectoState from './context/proyectos/ProyectoState';
import TareaState from './context/tareas/TareaState';

import ErrorGeneral from './components/ErrorGeneral';
function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <ErrorGeneral></ErrorGeneral>
          <Switch>
            <Route exact path="/" component={Signin}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/proyectos" component={Proyects}></Route>
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  )
}

export default App;
