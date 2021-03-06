import React, {useReducer, useContext} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import AuthContext from '../auth/AuthContext';
import establecerAxios from '../../config/authaxios';
import {OBTENER_TAREAS, AGREGAR_TAREA, ELIMINAR_TAREA, CAMBIAR_ESTADO, OBTENER_TAREA_EDITAR, EDITAR_TAREA, OBTENER_TODAS_TAREAS, OBTENER_ERROR, LIMPIAR_ESTADOS} from  '../../types';
const TareaState = (props) => {
     const {token} = useContext(AuthContext);
     const axios = establecerAxios(token);

     const initialState = {
          tareas: [],
          tareasproyecto: [],
          tareaedit: {},
          error: ''
     }
     
     const [state, dispatch] = useReducer(TareaReducer, initialState);

     const obtenerTodasTareas = async () => {
          try{
               const {data} = await axios.get('/tareas');
               dispatch({
                    type: OBTENER_TODAS_TAREAS,
                    payload: data.body
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }
     }
     
     const obtenerTareas = (id) => {
          const tareasproyecto = state.tareas.filter(tarea => tarea.proyectoid === id);

          dispatch({
               type: OBTENER_TAREAS,
               payload: tareasproyecto
          })
     }

     const agregarTarea = async (tarea) => {
          try{
               const {data} = await axios.post('/tareas', tarea);
               const newtareas = [data.body, ...state.tareas];
               dispatch({
                    type: AGREGAR_TAREA,
                    payload: newtareas
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }
     }

     const eliminarTarea = async (id) => {
          try{
               const {data} = await axios.delete(`/tareas/${id}`);
               console.log(data.message);
               const resttareas = state.tareas.filter(tarea => tarea._id !== id);
               dispatch({
                    type: ELIMINAR_TAREA,
                    payload: resttareas
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }

      
     }

     const cambiarEstado = async (id) => {
          try{
               const tarea = state.tareas.find(tarea => tarea._id === id);
               const {data} = await axios.put(`/tareas/${id}`, {estado: !tarea.estado});
               console.log(data.message);
               
               const newtareas = state.tareas.map(tarea => {
                    if(tarea._id === id){
                         tarea.estado = !tarea.estado
                    }
                    return tarea
               })
               dispatch({
                    type: CAMBIAR_ESTADO,
                    payload: newtareas
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }
     }

     const editarTarea = async (tarea) => {
          try{
               const {data} = await axios.put(`/tareas/${tarea._id}`, {name: tarea.name});
               console.log(data.message);
               const newtareas = state.tareas.map(tar => {
                    if(tar._id === tarea._id){
                         tar = tarea;
                    }
                    return tar;
               })
               dispatch({
                    type: EDITAR_TAREA,
                    payload: newtareas
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }

     }

     const obtenerTareaEditar = (tarea) => {
          dispatch({
               type: OBTENER_TAREA_EDITAR,
               payload: tarea
          })
     }

     const limpiarEstados = () => {
          dispatch({
               type: LIMPIAR_ESTADOS,
          })
     }
     
     return (
          <TareaContext.Provider value={{
               tareasproyecto: state.tareasproyecto,
               tareas: state.tareas,
               tareaedit: state.tareaedit,
               error: state.error,
               obtenerTodasTareas,
               obtenerTareas,
               agregarTarea,
               eliminarTarea,
               cambiarEstado,
               obtenerTareaEditar,
               editarTarea,
               limpiarEstados
          }}>
               {props.children}
          </TareaContext.Provider>
     )
}
export default TareaState;