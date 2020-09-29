import {AGREGAR_PROYECTO, OBTENER_PROYECTOS, SELECCIONAR_PROYECTO, ELIMINAR_PROYECTO, OBTENER_ERROR, LIMPIAR_ESTADOS} from '../../types';
export default (state, action) => {
     switch(action.type){
          case OBTENER_PROYECTOS:
               return {
                    ...state,
                    proyectos: action.payload,
                    error: ''
               }
          case AGREGAR_PROYECTO:
               return {
                    ...state,
                    proyectos: action.payload,
                    error: ''
               }
          case SELECCIONAR_PROYECTO:
               return {
                    ...state,
                    proyecto: action.payload
               }
          case ELIMINAR_PROYECTO:
               return {
                    ...state,
                    proyectos: action.payload,
                    proyecto: {},
                    error: ''
               }
          case OBTENER_ERROR:
               return {
                    ...state,
                    error: action.payload
               }
          case LIMPIAR_ESTADOS:
               return {
                    proyectos: [],
                    proyecto: {},
                    error: ''
               }
          default:
               return state;
     }
} 