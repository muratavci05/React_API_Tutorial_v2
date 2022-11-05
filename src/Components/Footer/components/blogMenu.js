import React from "react";


const BlogMenu = (props) => {
   // console.log ("blog menu props >>>", props);

    const blogMenu = props.menu.map((item, index )=>{

      /* 

        item ={
          title: "test",
          link: "#/about"
        }
      
      */
           //console.log (">>>blog menu item", item);

            return(
              <li className="mb-1" key={index}>
                <a className="link link-secondary text-decoration-none" 
                href={item.link} >{item.title} </a> </li>

            )
    })

    return(
        <div className="container">
            <div className="col-4 col-md">
        <h5>{props.title}</h5>
        <ul className="list-unstyled text-small">
          {blogMenu}
        
        </ul>
      </div>
        </div>

    )
};

export default BlogMenu;