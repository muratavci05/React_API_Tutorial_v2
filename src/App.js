import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { connect } from "react-redux"; 

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";
import Services from "./Pages/Services";
import Register from "./Pages/Register";

import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import useApi from "./Hooks/useApi";
import { SET_CATEGORIES } from "./Redux/Reducers/categoriesReducer";

function App (props) {
  console.log (">>> APP PROPS", props);

   const api = useApi()

  if (props.categoriesState.initialized === false) {
    api.get("https://api.adoptez1artisan.com/public/categories/listMainCategories",)
      .then((res) => {
        console.log('>> KATEGORI LISTESI CEVAP', res)

        const action = {
          type: SET_CATEGORIES,
          payload:{
            categories:res.data.data
          },

        }

        props.dispatch(action)
    })
    .catch((err) => console.error (">>> KATEGORI LISTESI HATASI", err));

  };

  if (api === false){
    <h1>Loading</h1>
  };

      
  return (
    <div className="App">
      <Header />

       <HashRouter>
           <Routes>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="categories" element={<Categories/>} />
            <Route path="services" element={<Services/>} />
            <Route path="register" element={<Register/>} />
           </Routes>
        </HashRouter>

      <Footer/>   
     </div>
  );
}


const mapStateToProps = (state) => {

  //console.log (">>> MAP STATE >>>", state);

  return  {
    ...state,

  }
}

export default connect (mapStateToProps)(App);
