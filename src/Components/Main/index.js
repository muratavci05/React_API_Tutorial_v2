import React,{useEffect,useState} from "react";
import useApi from "../../Hooks/useApi";
import Loading from "../Assents/loading";
import CategoryBox from "./components/category_box";


const Main = (props) => {
  const api = useApi();
  const [categories,setCategories] = useState(null);

  //pagination states
  const [pageLength,setPageLength] = useState(6);
  const [pageStart,setPageStart] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);

  useEffect(()=>{
    getCategoryPage(pageLength,pageStart);


  },[]);

  useEffect(()=>{
    getCategoryPage(pageLength,pageStart);


  },[pageLength,pageStart]);



  const getCategoryPage = (length, start)=> {
    api.get ("/public/categories/listMainCategories", {params: {length:pageLength, start:pageStart}})
    .then ((res) => {
    console.log ("Home Page api Res", res);
    setCategories(res.data.data);
    setTotalPageCount(Math.ceil (parseInt(res.data.recordsTotal)/ pageLength));

              // Toplam satır sayısı :23
              // Sayfa başına satır sayısı: 6
              // Toplam sayfa sayısı: Math.ceil ( 23 / 6 )

              //Math.round(0.1) = 0
              //Math.round(0.5) = 1
              //Math.floor(0.9) = 0
              //Math.ceil(0.1) = 1

     })
  .catch ((err) => {
    console.log ("Home Error", err);
  })

  }

  const categoryArray = []

    if (categories) {

      // kategori listesini componentlere ekle...
      categories.map((item, index) => {
          categoryArray.push(
            <CategoryBox
          key={index}
          id={item.id}
          name={item.name}
          href={`#/category/" + ${item.slug}`}
          image={item.image}
        
        />
          );
      });
    
    } else {
 
      // Loading ekranı göster
      categoryArray.push(<Loading key="0" />)

    }
        const pageComponents = []

        for (let i = 0; i < totalPageCount; i++){
          pageComponents.push(
            <button 
            key={i}
            onClick={()=>setPageStart(i * pageLength)}
            className="btn btn-outline-primary btn-sm text-center" 
            style={{width:"20px",border:"none"}}
            >
                 {i+1}
            </button>
          )
        }

        const lengthSelectComponents = []
        for (let i = 0; i<3; i++){
          lengthSelectComponents.push(
            <button 
            key={i}
            onClick={()=>setPageLength((i+1)*3)}
            className="btn btn-outline-danger btn-sm text-center" 
            style={{width:"20px",border:"none"}}
            >
                 { (i+1) * 3 }
          </button>
          )
        }


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
                  Bu Projede Backend API'ye Bağlanma Amaçlanmıştır,
                  
                  </h2>
        </main>
    )
};

export default Main;