import React, {Fragment} from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Form from '../components/signup/Form';
const Signup = () => {
     return (
           <Fragment>
               <Header title="Signup"></Header>
               <main>
               <section className="signup-form bg-secondary d-flex justify-content-center align-items-center">
                              <div className="col-11 col-sm-8 col-md-6">
                                   <div className="card bg-white text-body">
                                        <h3 className="m-0 text-center text-uppercase pt-4 pb-2 font-weight-bolder text-primary">Obtener una cuenta</h3>
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
 
export default Signup;