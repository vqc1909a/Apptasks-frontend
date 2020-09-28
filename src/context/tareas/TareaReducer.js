import {OBTENER_TAREAS, AGREGAR_TAREA, ELIMINAR_TAREA, CAMBIAR_ESTADO, OBTENER_TAREA_EDITAR, EDITAR_TAREA, OBTENER_TODAS_TAREAS, OBTENER_ERROR} from '../../types';
export default (state, action) => {
     switch(action.type){
          case OBTENER_TODAS_TAREAS:
               return {
                    ...state,
                    tareas: action.payload,
                    error: ''
               }
          case OBTENER_TAREAS:
               return {
                    ...state,
                    tareasproyecto: action.payload,
                    error: ''
               }
          case AGREGAR_TAREA:
               return {
                    ...state,
                    tareas: action.payload,
                    error: ''
               }
          case ELIMINAR_TAREA:
               return {
                    ...state,
                    tareas: action.payload,
                    error: ''
               }
          case CAMBIAR_ESTADO: 
               return {
                    ...state,
                    tareas: action.payload,
                    error: ''
               }
          case OBTENER_TAREA_EDITAR:
               return {
                    ...state,
                    tareaedit: action.payload,
                    error: ''
               }
          case EDITAR_TAREA:
               return {
                    ...state,
                    tareas: action.payload,
                    tareaedit: {},
                    error: ''
               }
           case OBTENER_ERROR:
                return {
                     ...state,
                     error: action.payload
                }
          default:
               return state;
     }
}