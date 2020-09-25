import React from 'react';
const Header = ({title}) => {
     return (
          <header className="header py-2 bg-primary">
               <div className="container">
                    <div className="row">
                         <div className="col">
                              <h2 className="text-center display-4 text-white">{title}</h2>
                         </div>
                    </div>
               </div>
          </header>
     );
}
 
export default Header;