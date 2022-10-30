import React from "react";
import BootstrapLogo from "../components/assents/bootstrap-logo.svg";
import FooterMenu from "./footer_menu";


const Footer = (props) => {

    return(
    <div className="container py-3">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={BootstrapLogo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-muted">© 2017–2022</small>
      </div>
        <div>
        <FooterMenu/>
        </div>
        
      <div className="col-6 col-md">
        <h5>Categories</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Kitchen</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Woman's</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Man's</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Children's</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  </div>

    )
};

export default Footer;