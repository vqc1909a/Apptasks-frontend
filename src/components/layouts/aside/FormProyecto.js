import React, {useState, useEffect, useContext} from 'react';
import {CSSTransition} from 'react-transition-group'
import ProyectoContext from '../../../context/proyectos//ProyectoContext';
const Form = () => {
     const [stateform, changeStateForm] = useState(false);
     const [inProp, setInProp] = useState(false);
     const {agregarProyecto} = useContext(ProyectoContext);

     const [proyecto, changeProyecto] = useState({
          name: '',
          error: ''
     })
     const {name, error} = proyecto

     useEffect(()=>{
          if(stateform){
               setInProp(true);
          }else{
               setInProp(false);
          }
     }, [stateform])

     const handleProyecto = (e) => {
          changeProyecto({
               ...proyecto,
               [e.target.name]: e.target.value
          })
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          if(name.trim() === ''){
               changeProyecto({
                    ...proyecto,
                    error: 'El campo es requerido'
               })
               return null;
          }
          changeProyecto({
               ...proyecto,
               error: ''
          })
          //!Enviar al state
          agregarProyecto(proyecto)
          changeStateForm(false);
          changeProyecto({
               name: ''
          })
     }
     return (

          <div className="aside-form">
               {!stateform
               ?
               <button className="btn btn-light btn-block my-3 btn-lg" onClick={() => changeStateForm(true)}>Nuevo Proyecto</button>
               :
               <CSSTransition in={inProp} timeout={500} classNames="addproyect">
                    <form className="my-4" onSubmit={handleSubmit} >
                         {error ? <div className="alert alert-danger my-3">{error}</div> : null}
                         <div className="form-group">
                              <input value={name} type="text" className="form-control bg-transparent text-white" placeholder="Nombre proyecto" onChange={handleProyecto} name="name"/>
                         </div>
                         <button type="submit" className="btn btn-light btn-block">Agregar proyecto</button>
                    </form>
               </CSSTransition>
              
               }
              
              

          </div>
     );
}
 
export default Form;