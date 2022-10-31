
import React from "react";

const CategoriesMenu = (props) => {
  console.log("categoriMenu >>>", props);

    const categoriesMenu = props.menu.map ((item, index)=>{
          console.log("categories menu item", item);

          return(
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" 
              href="#">{item}</a></li>

          )
    })
    
    return(
        <div className="col-6 col-md">
            <div className="col-6 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {categoriesMenu}
        </ul>
      </div>
        </div>
    )
};

export default CategoriesMenu;