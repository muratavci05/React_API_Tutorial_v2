import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import Home from "./Pages/Home";

import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Header />
    <HashRouter>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    </HashRouter>
    <Footer/>
       
      
    </div>
  );
}

export default App;
