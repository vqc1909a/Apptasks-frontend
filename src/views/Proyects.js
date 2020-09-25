import React from 'react';
import Aside from '../components/layouts/Aside';
import Navbar from '../components/layouts/Navbar';
import FormTarea from '../components/proyects/FormTarea';
import ListaTareas from '../components/proyects/ListaTareas';

const Proyects = () => {
     return (
          <div className="container-proyects d-sm-flex">
               <Aside title="App Tasks"></Aside>
               <div className="col-sm-8 col-md-9 bg-secondary p-0">
                    <Navbar></Navbar>
                    <main className="main">
                         <FormTarea></FormTarea>
                         <ListaTareas></ListaTareas>
                    </main>
               </div>
          </div>
     );
}
 
export default Proyects;