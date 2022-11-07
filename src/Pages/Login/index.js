import React from "react";


const Login = () => {

    return(

        <div className="container py-3">
                <div className="col">

                <label for="email" className="form-label" style={{color:"purple"}}>Email 
                </label>
                <input style={{width:"225px",marginBottom:"15px"}} type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <label style={{marginBottom:"8px", color:"purple"}} for="password" className="form-label">Password 
                </label>
                <input style={{width:"225px",marginBottom:"5px",marginBottom:"5px"}} type="password" className="form-control" id="password" placeholder="password"/>
                <div>
                <button type="button" className="btn btn-primary btn-lg btn-block">Gönder</button>

                </div>
            </div>
        </div>

    )
}

export default Login;