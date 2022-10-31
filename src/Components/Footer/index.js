import React from "react";
import BootstrapLogo from "../Footer/components/assents/bootstrap-logo.svg";
import AboutMenu from "./components/aboutMenu";
import CategoriesMenu from "./components/categoriesMenu";
import FooterMenu from "./components/footer_menu";


const Footer = (props) => {

    return(
    <div className="container py-3">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={BootstrapLogo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-muted">© 2017–2022</small>
      </div>
        <div className="col-6 col-md">
        <FooterMenu/>
        </div>
        <div className="col-6 col-md">
        <CategoriesMenu/>
        </div>
        <div className="col-6 col-md">
        <AboutMenu/>
        </div>
        
      
      
    </div>
  </footer>
  </div>

    )
};

export default Footer;