import React, {Fragment, useEffect, useContext} from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Form from '../components/signin/Form';

import ProyectoContext from '../context/proyectos/ProyectoContext';

const Signin = () => {
     const proyectocontext = useContext(ProyectoContext);
     useEffect(()=>{
          proyectocontext.limpiarErrorGeneral();
          // eslint-disable-next-line
     },[])

     return (
          <Fragment>
               <Header title="Aplicación de Tareas"></Header>
               <main>
                    <section className="signin-form bg-secondary d-flex justify-content-center align-items-center">
                              <div className="col-11 col-sm-8 col-md-6">
                                   <div className="card bg-white text-body">
                                        <h3 className="m-0 text-center text-uppercase pt-4 pb-2 font-weight-bolder text-primary">Iniciar Sesión</h3>
                                        <div className="card-body">
                                             <Form></Form>                                   
                                        </div>
                                   </div>
                              </div>
                    </section>   
               </main>
               <Footer></Footer>
          </Fragment>
     );
}
 
export default Signin;