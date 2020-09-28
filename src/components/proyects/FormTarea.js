import React, {useState, useContext, useEffect} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext  from '../../context/tareas/TareaContext';
const FormTarea = () => {
     const {proyecto} = useContext(ProyectoContext);
     const {agregarTarea, tareaedit, editarTarea, obtenerTareaEditar} = useContext(TareaContext);

     
     const [tarea, changeTarea] = useState({
          name: '',
          error: ''
     });
     const {name, error} = tarea;
     
     const handleTarea = (e) => {
          changeTarea({
               ...tarea,
               [e.target.name]: e.target.value
          })
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          if(name.trim() === ''){
               changeTarea({
                    ...tarea,
                    error: 'El campo es requerido'
               });
               return null;
          }
          changeTarea({
               ...tarea,
               error: ''
          })
           if (Object.keys(tareaedit).length === 0) {
                agregarTarea(
                     {
                          ...tarea,
                          proyectoid: proyecto._id
                     }
                );
           }else{
                editarTarea(
                     {
                          ...tareaedit,
                          name
                     }
                )
           }
           changeTarea({
                name: '',
                error: ''
           })
     }

     useEffect(() => {
          if (Object.keys(tareaedit).length !== 0){
               changeTarea({
                    ...tarea,
                    name: tareaedit.name
               })
          }
          // eslint-disable-next-line
     }, [tareaedit])

      useEffect(() => {
           obtenerTareaEditar({});
          changeTarea({
               name: '',
               error: ''
          })
           // eslint-disable-next-line
      }, [proyecto]);


     if (Object.keys(proyecto).length === 0) return null;
     return (
          <div className="form-tarea py-5 bg-dark">
               <div className="container">
                    <div className="row justify-content-center">
                         <div className="col col-sm-10 col-md-6">
                              <form action="" onSubmit={handleSubmit}>
                              {error ? <div className="alert alert-danger">{error}</div> : null}
                                   <div className="form-group">
                                        <input value={name} name="name" placeholder="Nombre Tarea..." type="text" className="form-control" onChange={handleTarea}/>
                                   </div>
                                   <button type="submit" className="btn btn-primary btn-block">{Object.keys(tareaedit).length === 0 ? 'Agregar Tarea' : 'EditarTarea'}</button>
                              </form>
                         </div>
                    </div>
               </div>

          </div>
     );
}
 
export default FormTarea;