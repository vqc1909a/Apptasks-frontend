import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import establecerAxios from '../../config/authaxios';
import {OBTENER_ERROR, LOGUEARSE, OCULTAR_ERROR, CERRAR_SESION, OBTENER_USUARIO} from '../../types';
const AuthState = (props) => {
     
     const initialState = {
          token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '',
          user: {},
          errorauth: '' 
     }
     const [state, dispatch] = useReducer(AuthReducer, initialState);
     
     const axios = establecerAxios(state.token);

     const registrarse = async (user) => {
          try{ 
               const {data} = await axios.post('/user/signup', user);
               localStorage.setItem('token', JSON.stringify(data.message));
               dispatch({
                    type: LOGUEARSE,
                    payload: data.message,
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message,
               })
          }
     }
     const iniciarSesion = async (user) => {
          try{ 
               const {data} = await axios.post('/user/signin', user);
               localStorage.setItem('token', JSON.stringify(data.message));
               dispatch({
                    type: LOGUEARSE,
                    payload: data.message,
               })
          }catch(err){
               const {data} = err.response;
               dispatch({
                    type: OBTENER_ERROR,
                    payload: data.message
               })
          }
     }
     const cerrarSesion = () => {

          dispatch({
               type: CERRAR_SESION
          })
     }

     const ocultarError = async () => {
          dispatch({
               type: OCULTAR_ERROR
          })
     }

     const obtenerUsuario = async () => {
          try{
               const {data} = await axios.get('/user');
               dispatch({
                    type: OBTENER_USUARIO,
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
     return (
          <AuthContext.Provider
          value={{
               user: state.user,
               token: state.token,
               errorauth: state.errorauth,
               registrarse,
               iniciarSesion,
               ocultarError,
               cerrarSesion,
               obtenerUsuario,
          }}>
               {props.children}
          </AuthContext.Provider>
     )
}
export default AuthState;