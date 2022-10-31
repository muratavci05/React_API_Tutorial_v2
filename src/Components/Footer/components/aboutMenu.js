
import React from "react";


const AboutMenu = (props) => {
  console.log("about Menu >>>", props);

    const aboutMenu = props.menu.map ((item, index)=>{
      console.log("footer menu item", item);

        return(
          <li className="mb-1">
            <button className="btn btn-link btn-sm text-decoration-none" 
            href="#">{item}</button></li>
        );
    });


    return(

        <div className="col-6 col-md">
            <div className="col-6 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {aboutMenu}
          
        </ul>
      </div>

        </div>
    )
}

export default AboutMenu;