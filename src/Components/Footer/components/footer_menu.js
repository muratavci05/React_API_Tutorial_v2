import React from "react";


const FooterMenu = (props) => {
    console.log ("footer menu props >>>", props);

    return(
        <div >
            <div className="col-6 col-md">
        <h5>Features ıuıu</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
        </div>

    )
};

export default FooterMenu;