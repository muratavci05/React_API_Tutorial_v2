import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    
    <Header />
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
       
      
    </div>
  );
}

export default App;
