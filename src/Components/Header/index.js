import React, { useEffect, useState } from "react"
import { Can } from "../../Ability/can";
import useApi from "../../Hooks/useApi";

import Bootstrap from "../Header/bootstrap.svg";


const Header = (props) => {

  const api = useApi();
  const [user, setUser]=useState(null);

  useEffect(()=>{ 
      const token = localStorage.getItem("token");
          if (token) { 
      api.get("/user/appData")
        .then((res)=>{
          console.log("user res >>>", res);
          setUser(res.data.data.user);
        })
        .catch((err)=>{
          console.log("user error >>>", err);
        })

      }
  },[]);

  const onLogoutBtnClick = () => {
          api.get("auth/logout")
            .then((res) =>{
              console.log ("LOGOUT RES >>>", res);
            })
            .catch((err) =>{
              console.log ("LOGOUT ERROR >>>", err);
            })
            .finally (()=>{
              localStorage.removeItem("token")
              window.location.href = "#/admin/dashboard"
              setTimeout(() =>{
                window.location.reload();
              },111)
            })
  };


  // const test = true  //inline if yapısı için
    return (
    <header className="container py-3">
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
         <a href="#/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Hizmet Bulma Uygulaması</span>
         </a> 
      

            {/* inline if yapısı   */}   
         {/* <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <strong 
                className="me-3 py-2" style={{color:"#50577A" }} >
            {test === true ? ("Test değeri TRUE") : ("Test değeri FALSE")}
          </strong>
          </nav> */}

          {user ? (
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <strong className="me-3 py-2 " >
            {user.fullname}
          </strong>

              <Can I="manager" a="all">
              <button className="btn btn-outline-secondary me-3 py-2" 
             href="#/admin/dashboard"
             onClick={onLogoutBtnClick}
             >
              Admin
          </button>
              </Can>
              
          <button className="btn btn-danger me-3 py-2" 
             href="#/"
             onClick={onLogoutBtnClick}
             >
             Logout
          </button>
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
