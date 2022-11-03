import React from "react";
import BootstrapLogo from "../Footer/components/assents/bootstrap-logo.svg";
import AboutMenu from "./components/aboutMenu";
import CategoriesMenu from "./components/categoriesMenu";
import FooterMenu from "./components/footer_menu";
import { connect } from "react-redux";


const Footer = (props) => {
  console.log("FOOTER PROPS >>>>", props);


    return(
    <div className="container py-3">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={BootstrapLogo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-muted">© 2017–2022</small>
      </div>
        <div className="col-3 col-md">
        <FooterMenu title="Bloglar" menu={["Tadilat","Kargolama","Servis","Diğer"]}/>  
        </div>
        <div className="col-6 col-md">
        <CategoriesMenu title="Kategoriler" menu={["Bayan","Bay","Çocuk","Outlet"]}/>
        </div>
        <div className="col-6 col-md">
        <AboutMenu title="Hakkımızda" menu={["Ekibimiz","Vizyon","Misyon","İletişim"]}/>
        </div>
        
           
    </div>
  </footer>
  </div>

    )
};

const mapStateToProps = (state) => {

  console.log("mapstateToProps >>>",state);
  return{
    categories_footerOrnek: state.categoriesState,
  }
}

export default connect(mapStateToProps) (Footer);