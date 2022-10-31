import React from "react";


const FooterMenu = (props) => {
    console.log ("footer menu props >>>", props);

    const footerMenu = props.menu.map((item, index )=>{
            console.log (">>>footer menu item", item);

            return(
              <li className="mb-1">
                <button className="btn btn-link btn-sm text-decoration-none" 
                href="#">{item}</button></li>

            )
    })

    return(
        <div className="container">
            <div className="col-6 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {footerMenu}
        
        </ul>
      </div>
        </div>

    )
};

export default FooterMenu;