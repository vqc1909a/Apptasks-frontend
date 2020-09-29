import {OBTENER_ERROR, LOGUEARSE, OCULTAR_ERROR, CERRAR_SESION, OBTENER_USUARIO} from '../../types';
export default (state, action) => {
    
     switch(action.type){
          case LOGUEARSE:
                return {
                    ...state,
                    token: action.payload,
                    errorauth: ''
                }
          case OBTENER_ERROR:
               localStorage.removeItem('token');
               return {
                    ...state,
                    errorauth: action.payload
               }
          case OCULTAR_ERROR:
               return {
                    ...state,
                    errorauth: ''
               }
          case CERRAR_SESION: 
                localStorage.removeItem('token');
               return {
                    ...state,
                    token: '',
                    user: {},
                    errorauth: ''
               }
          case OBTENER_USUARIO: 
               return {
                    ...state,
                    user: action.payload,
                    errorauth: ''
               }
          default :
               return state
     }
}