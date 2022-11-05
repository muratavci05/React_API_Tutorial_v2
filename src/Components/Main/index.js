import React,{useEffect,useState} from "react";
import useApi from "../../Hooks/useApi";
import Loading from "../Assents/loading";
import CategoryBox from "./components/category_box";


const Main = (props) => {
  const api = useApi();
  const [categories,setCategories] = useState(null)

  useEffect(()=>{
    api.get ("/public/categories/listMainCategories")
        .then ((res) => {
        console.log ("Home Page (api) Res", res);
        setCategories(res.data.data)
         })
      .catch ((err) => {
        console.log ("Home Error", err);
      })

  },[]);

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
      categoryArray.push(<Loading/>)

    }

    return (
        <main className="container py-3">
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
       {categoryArray}
  
    </div>

    <h2 className="display-6 text-center mb-4" style={{color:"red"}}>Bu Projede Backend API'ye Bağlanma Amaçlanmıştır</h2>

  </main>
    )
};

export default Main;