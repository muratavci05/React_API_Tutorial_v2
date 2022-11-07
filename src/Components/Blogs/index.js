import React,{useEffect,useState} from "react";
import useApi from "../../Hooks/useApi";
import Loading from "../Assents/loading";



const Blog = (props) => {
  const api = useApi();
  
  
 

  useEffect(()=>{
    api.get ("public/blogs/list?status=active&length=6")
    .then ((res) => {
    console.log ("Home BLOGS api Res", res);
   

              // Toplam satır sayısı :23
              // Sayfa başına satır sayısı: 6
              // Toplam sayfa sayısı: Math.ceil ( 23 / 6 )

              //Math.round(0.1) = 0
              //Math.round(0.5) = 1
              //Math.floor(0.9) = 0
              //Math.ceil(0.1) = 1

     })
  .catch ((err) => {
    console.log ("BLOG API Error", err);
  })


  },[]);

  /* useEffect(()=>{
    getCategoryPage(pageLength,pageStart);


  },[pageLength,pageStart]); */



    return (
        <main className="container py-3">
              <div className="row mb-3 text-center">
                <div style={{marginTop:"-40px", color:"#B2B2B2",marginBottom:"15px"}}>
                  <h5 style={{color:"gray"}}>
                  Page Count: <span style={{color:"#6F38C5"}}>{totalPageCount}</span>
                  </h5>
               
              &nbsp;
                Page:
                  {pageComponents}
              &nbsp;

                Rows:
                  {lengthSelectComponents}

                </div>

                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {categoryArray}
                </div>
               
              </div>
                <h2 
                className="display-6 text-center mb-4" 
                style={{color:"red"}}
                >
                  Bu Projede Backend API'ye Bağlanma Amaçlanmıştır</h2>
        </main>
    )
};

export default Blog;