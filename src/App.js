import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer/index";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";
import Services from "./Pages/Services";
import Register from "./Pages/Register";

function App() {
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

export default App;
