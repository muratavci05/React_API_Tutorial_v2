
import React from "react";


const AboutMenu = (props) => {
    console.log("about Menu >>>", props);

    const aboutMenu = props.menu.map ((item, index)=>{
    // console.log("footer menu item", item);

        return(
          <li className="mb-1" key={index}>
            <a className="link link-info text-decoration-none" 
            href={item.link}>{item.title}</a></li>
        );
    });


    return(
      <div className="container">
        
            <div className="col-4 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {aboutMenu}
          
        </ul>
      
      </div>
    </div>
    )
}

export default AboutMenu;