import {OBTENER_TAREAS, AGREGAR_TAREA, ELIMINAR_TAREA, CAMBIAR_ESTADO, OBTENER_TAREA_EDITAR, EDITAR_TAREA} from '../../types';
export default (state, action) => {
     switch(action.type){
          case OBTENER_TAREAS:
               return {
                    ...state,
                    tareasproyecto: action.payload
               }
          case AGREGAR_TAREA:
               return {
                    ...state,
                    tareas: action.payload
               }
          case ELIMINAR_TAREA:
               return {
                    ...state,
                    tareas: action.payload
               }
          case CAMBIAR_ESTADO: 
               return {
                    ...state,
                    tareas: action.payload
               }
          case OBTENER_TAREA_EDITAR:
               return {
                    ...state,
                    tareaedit: action.payload
               }
          case EDITAR_TAREA:
               return {
                    ...state,
                    tareas: action.payload,
                    tareaedit: {}
               }
          default:
               return state;
     }
}