import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { connect } from "react-redux"; 

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Register from "./Pages/Register";
import Blogs from "./Pages/Blogs";

import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import useApi from "./Hooks/useApi";
import { SET_CATEGORIES } from "./Redux/Reducers/categoriesReducer";

import { AbilityContext } from "./Ability/can";
import ability from "./Ability/ability.js";


function App (props) {
  console.log (">>> APP COMPONENT PROPS", props);


 
  // inline if >>> eğer appdata !null ise 1 , null ise 2 çalışcak
  const clientAbility = props.appDataState.appData 
  ? ability(props.appDataState.appData.user)   // 1
  : ability (null);                           //  2

  // <<<<
  console.log(" >>> ability durumu",clientAbility);

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

    <AbilityContext.Provider value={clientAbility}>

     <div className="App">
      <Header />

       <HashRouter>
           <Routes>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="services" element={<Services/>} />
            <Route path="register" element={<Register/>} />
            <Route path="blogs" element={<Blogs/>} />
           </Routes>
        </HashRouter>

      <Footer/>   
     </div>
     </AbilityContext.Provider>
  );
}


const mapStateToProps = (state) => {

  //console.log (">>> MAP STATE >>>", state);

  return  {
    ...state,

  }
}

export default connect (mapStateToProps)(App);
