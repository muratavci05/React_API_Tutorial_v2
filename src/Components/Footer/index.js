import React from "react";
import BootstrapLogo from "../Footer/components/assents/bootstrap-logo.svg";
import AboutMenu from "./components/aboutMenu";
import CategoriesMenu from "./components/categoriesMenu";
import BlogMenu from "./components/blogMenu";
import { connect } from "react-redux";


const Footer = (props) => {
  console.log("FOOTER PROPS >>>>", props);

    const aboutUsMenuContent = [
      {
        title: "Ekibimiz",
        link: "#/about/who-we-are"
      },
      {
        title: "Vizyon",
        link: "#/about/vision"
      },
      {
        title: "Misyon",
        link: "#/about/mission"
      },
      {
        title: "İletişim",
        link: "#/about/contact"
      },
           

    ]

    const blogUsMenuContent = [
      {
        title: "blog1",
        link: "#/about/myBlog1"
      },
      {
        title: "blog2",
        link: "#/about/myBlog2"
      },
      {
        title: "blog3",
        link: "#/about/myBlog3"
      },
      {
        title: "blog4",
        link: "#/about/myBlog4"
      },

    ]

    const categoryMenu = []
    if (props.categoriesState.initialized === true) {
       props.categoriesState.categories.map((item, index) => {

        //çekilen kategorileri sayısını belirleme >>>

        if (index > 4) {
          return;
        }

        // <<<<
               
       categoryMenu.push({
           
            title: item.name,
            link: "#/category/" + item.slug,
           
           })
       
      });
      
    }

    return(
    <div className="container py-3 footer">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-sm">
        <img className="mb-2" src={BootstrapLogo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-muted">© 2017–2022</small>
      </div>
        <div className="col-4 col-sm">
        <BlogMenu title="Bloglar" menu={blogUsMenuContent}/>  
        </div>

        <div className="col-4 col-sm">
        <CategoriesMenu title="Kategoriler" menu={categoryMenu}
          loading={!props.categoriesState.initialized}        
        />
        </div>

        <div className="col-4 col-sm">
        <AboutMenu title="Hakkımızda" menu={aboutUsMenuContent}/>
        </div>
        
           
    </div>
  </footer>
  </div>

    )
};

const mapStateToProps = (state) => {

  //console.log("mapstateToProps >>>",state);
  return{
    categoriesState: state.categoriesState,
  }
}

export default connect(mapStateToProps) (Footer);