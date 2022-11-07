import React from "react";

const Login = (props) => {

    return(
        <div className="container py-3">

            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com"/>

            <label for="password" class="form-label">Email <span class="text-muted">(Optional)</span></label>
            <input type="password" class="form-control" id="email" placeholder="you@example.com"/>
        </div>
    )
};

export default Login;