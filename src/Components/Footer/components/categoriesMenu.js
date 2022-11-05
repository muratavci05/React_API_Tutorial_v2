
import React from "react";


const CategoriesMenu = (props) => {
  console.log("categoriMenu >>>", props);

  if (props.loading === true) {
    return(  
    
      <div className="col-6 col-md">
      <img src="images/loading.gif" />
    </div>
    )
  
  }

  

    const categoriesMenu = props.menu.map ((item, index, arr)=>{
        // console.log("categories menu item", item);

          return(
            <li className="mb-1" key={index}>
              <a className="link link-danger text-decoration-none" 
              href={item.link}>{item.title}</a></li>

          )
    })
    
    return(
      <div className="container">
        <div className="col-4 col-md">
            
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {categoriesMenu}
        </ul>
      </div>
        
        </div>
    )
};

export default CategoriesMenu;