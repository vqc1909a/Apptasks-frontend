import React, {useReducer, useState, useContext} from 'react';
import { OBTENER_PROYECTOS, AGREGAR_PROYECTO, SELECCIONAR_PROYECTO, ELIMINAR_PROYECTO, OBTENER_ERROR, LIMPIAR_ESTADOS } from '../../types';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import AuthContext from '../auth/AuthContext';
import establecerAxios from '../../config/authaxios';
const ProyectoState = (props) => {
     const {token} = useContext(AuthContext);
     const axios = establecerAxios(token);
     
     const initialState = {
          proyectos: [],
          proyecto: {},
          error: '',
     }
     const [spinner, changeSpinner] = useState(false);

     const [state, dispatch] = useReducer(ProyectoReducer, initialState)

     const obtenerProyectos = async () => {
          try{
               changeSpinner(true);
               const {data} = await axios.get('/proyectos');
               dispatch({
                    type: OBTENER_PROYECTOS,
                    payload: data.body
               })
               changeSpinner(false);

          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
               changeSpinner(false);
          }
     }
     const agregarProyecto = async(proyecto) => {
          try{
               
               const {data} = await axios.post('/proyectos', proyecto);
                const newproyectos = [...state.proyectos, data.body];
                dispatch({
                     type: AGREGAR_PROYECTO,
                     payload: newproyectos
                })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }
     }
     const seleccionarProyecto = (id) => {
          const proyecto = state.proyectos.find(proyecto => proyecto._id === id);
          dispatch({
               type: SELECCIONAR_PROYECTO,
               payload: proyecto
          })
     }
     const eliminarProyecto = async (id) => {
          try{
               const {data} = await axios.delete(`/proyectos/${id}`);
               console.log(data.message);
               const restproyects = state.proyectos.filter(proyecto => proyecto._id !== id);
               dispatch({
                    type: ELIMINAR_PROYECTO,
                    payload: restproyects
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })

          }
     }
     const limpiarErrorGeneral = () => {
            dispatch({
                 type: OBTENER_ERROR,
                 payload: ''
            })
     }
     const limpiarEstados = () => {
          dispatch({
               type: LIMPIAR_ESTADOS
          })
     }
     return (
          <ProyectoContext.Provider
          value={{
               proyectos: state.proyectos,
               proyecto: state.proyecto,
               error: state.error,
               spinner,
               obtenerProyectos,
               agregarProyecto,
               seleccionarProyecto,
               eliminarProyecto,
               limpiarErrorGeneral,
               limpiarEstados

          }}>
               {props.children}
          </ProyectoContext.Provider>
     )
}

export default ProyectoState