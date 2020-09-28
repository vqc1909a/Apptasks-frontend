import axios from 'axios';
const establecerAxios = (token) => {
     const authaxios = axios.create({
          baseURL: process.env.REACT_APP_BACKEND_URL
     });
     if(token){
          authaxios.defaults.headers.common['auth-token'] = token;
     }
     return authaxios;
}
export default establecerAxios;

