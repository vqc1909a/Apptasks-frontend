import {AGREGAR_PROYECTO, OBTENER_PROYECTOS, SELECCIONAR_PROYECTO, ELIMINAR_PROYECTO} from '../../types';
export default (state, action) => {
     switch(action.type){
          case OBTENER_PROYECTOS:
               return {
                    ...state,
                    proyectos: action.payload
               }
          case AGREGAR_PROYECTO:
               return {
                    ...state,
                    proyectos: action.payload
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
                    proyecto: {}
               }
          default:
               return state;
     }
} 