import React,{useEffect,useState} from "react";
import useApi from "../../Hooks/useApi";


const Main = (props) => {
  const api = useApi();

  useEffect(()=>{
    api.get ("https://api.adoptez1artisan.com/public/categories/listMainCategories")
        .then ((res) => {
        console.log ("Home Res", res);
         })
      .catch ((err) => {
        console.log ("Home Error", err);
      })

  },[]);

    return(
        <main className="container py-3">
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Products - 1</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$40<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-secondary">Sale</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Products - 2</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$59<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-secondary">Sale</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Products - 3</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$119<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">Sale</button>
          </div>
        </div>
      </div>
    </div>

    <h2 className="display-6 text-center mb-4" style={{color:"red"}}>Bu Projede Backend API'ye Bağlanma Amaçlanmıştır</h2>

    
    
  </main>
    )
};

export default Main;