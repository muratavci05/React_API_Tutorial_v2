import React from "react";


const FooterMenu = (props) => {
    console.log ("footer menu props >>>", props);

    const footerMenu = props.menu.map((item, index )=>{
            console.log (">>>footer menu item", item);

            return(
              <li className="mb-1" key={index}>
                <a className="link link-primary text-decoration-none" 
                href="#">{item}</a></li>

            )
    })

    return(
        <div className="container">
            <div className="col-4 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {footerMenu}
        
        </ul>
      </div>
        </div>

    )
};

export default FooterMenu;