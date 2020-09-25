import React, {useReducer} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {OBTENER_TAREAS, AGREGAR_TAREA, ELIMINAR_TAREA, CAMBIAR_ESTADO, OBTENER_TAREA_EDITAR, EDITAR_TAREA} from  '../../types';
import uuid from 'uuid';
const TareaState = (props) => {

     const initialState = {
          tareas: [ {name: 'Tarea 1 Proyecto 1' , estado: true, _id: "1", proyectoid: "1"},
               {name: 'Tarea 2 Proyecto 1' , estado: false, _id: "2", proyectoid: "1"},
               {name: 'Tarea 3 Proyecto 1' , estado: false, _id: "3", proyectoid: "1"},
               {name: 'Tarea 4 Proyecto 1' , estado: true, _id: "4", proyectoid: "1"},
               {name: 'Tarea 1 Proyecto 2' , estado: true, _id: "5", proyectoid: "2"},
               {name: 'Tarea 2 Proyecto 2' , estado: false, _id: "6", proyectoid: "2"},
               {name: 'Tarea 3 Proyecto 2' , estado: false, _id: "7", proyectoid: "2"},
               {name: 'Tarea 1 Proyecto 3' , estado: true, _id: "8", proyectoid: "3"},
               {name: 'Tarea 2 Proyecto 3' , estado: true, _id: "9", proyectoid: "3"}
          ],
          tareasproyecto: [],
          tareaedit: {}
     }
     
     const [state, dispatch] = useReducer(TareaReducer, initialState);

     const obtenerTareas = (id) => {
          const tareasproyecto = state.tareas.filter(tarea => tarea.proyectoid === id);

          dispatch({
               type: OBTENER_TAREAS,
               payload: tareasproyecto
          })
     }

     const agregarTarea = (tarea) => {
          tarea._id = uuid.v4();
          const newtareas = [tarea, ...state.tareas];
          dispatch({
               type: AGREGAR_TAREA,
               payload: newtareas
          })
     }

     const eliminarTarea = (id) => {
          const resttareas = state.tareas.filter(tarea => tarea._id !== id);
          dispatch({
               type: ELIMINAR_TAREA,
               payload: resttareas
          })
     }

     const cambiarEstado = (id) => {
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
     }

     const editarTarea = (tarea) => {

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
     }

     const obtenerTareaEditar = (tarea) => {
          dispatch({
               type: OBTENER_TAREA_EDITAR,
               payload: tarea
          })
     }

     return (
          <TareaContext.Provider value={{
               tareasproyecto: state.tareasproyecto,
               tareas: state.tareas,
               tareaedit: state.tareaedit,
               obtenerTareas,
               agregarTarea,
               eliminarTarea,
               cambiarEstado,
               obtenerTareaEditar,
               editarTarea
          }}>
               {props.children}
          </TareaContext.Provider>
     )
}
export default TareaState;