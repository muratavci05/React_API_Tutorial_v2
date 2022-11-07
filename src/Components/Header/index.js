import React, { useState } from "react"
import useApi from "../../Hooks/useApi";

import Bootstrap from "../Header/bootstrap.svg";


const Header = (props) => {

  const api = useApi();
  const [user, setUser]=useState(null);

  const test = true

    return(
    <header className="container py-3">
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
         <a href="#/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Hizmet Bulma Uygulaması</span>
         </a> 
      
         <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <strong 
                className="me-3 py-2" style={{color:"#50577A"}} >
            {test === true ? ("Test değeri TRUE") : ("Test değeri FALSE")}
          </strong>
          </nav>

          {user ? (
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <strong className="me-3 py-2 " >
            {user.fullname}
          </strong>
          <a className="btn btn-danger me-3 py-2 " 
             href="#/register">
             Logout
          </a>
          </nav>
          ) : (
          
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="btn btn-primary me-3 py-2 " href="#/login">
              Login
              </a>
             <a className="btn btn-primary me-3 py-2 " href="#/register">
              Register
            </a>
 
          </nav>
      
          )}  
    </div>

  </header>
    )

};

export default Header;
