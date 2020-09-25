import React, {useReducer} from 'react';
import { OBTENER_PROYECTOS, AGREGAR_PROYECTO, SELECCIONAR_PROYECTO, ELIMINAR_PROYECTO } from '../../types';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import uuid from 'uuid';

const ProyectoState = (props) => {


     const initialState = {
          proyectos: [],
          proyecto: {}
     }

     const [state, dispatch] = useReducer(ProyectoReducer, initialState)

     const obtenerProyectos = () => {
          const proyectos =  [
               {name: "Proyecto 1", _id: "1"},
               {name: "Proyecto 2", _id: "2"},
               {name: "Proyecto 3", _id: "3"},
          ]
          dispatch({
               type: OBTENER_PROYECTOS,
               payload: proyectos
          })
     }
     const agregarProyecto = (proyecto) => {
          proyecto._id = uuid.v4();
          const newproyectos = [...state.proyectos, proyecto];
          dispatch({
               type: AGREGAR_PROYECTO,
               payload: newproyectos
          })
     }
     const seleccionarProyecto = (id) => {
          const proyecto = state.proyectos.find(proyecto => proyecto._id === id);
          dispatch({
               type: SELECCIONAR_PROYECTO,
               payload: proyecto
          })
     }
     const eliminarProyecto = (id) => {
          const restproyects = state.proyectos.filter(proyecto => proyecto._id !== id);
          dispatch({
               type: ELIMINAR_PROYECTO,
               payload: restproyects
          })
     }
     return (
          <ProyectoContext.Provider
          value={{
               proyectos: state.proyectos,
               proyecto: state.proyecto,
               obtenerProyectos,
               agregarProyecto,
               seleccionarProyecto,
               eliminarProyecto
          }}>
               {props.children}
          </ProyectoContext.Provider>
     )
}

export default ProyectoState