import React,{useState} from "react";
import useApi from "../../Hooks/useApi"


const Login = (props) => {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const api = useApi();

    const onLoginBtnClick = () => {
       // alert(`${email} ve ${password}`)

        const postData = {
            email,password,
        }
            console.log("POSTA DATA >>>",postData);

        api.post("/auth/login", postData)
            .then((res=>{
                console.log("LOGIN API POST",res);
                console.log ("LOGIN TOKEN >>> ",res.data.data.token);
                

                if (res.data.status === "success"){
                    localStorage.setItem("localStroge TOKEN",res.data.data.token);
                } else {
                    alert("Hatalı Şifre veya Kullanıcı Adı");
                }
                
            }))
            .catch((err)=>{
                console.log("LOGIN API ERROR", err);

                //her error'da errorMessage döner...!
                alert(err.response.data.errorMessage)
            })

    };

    return(

        <div className="container py-3">
                <div className="col">

                <label htmlfor="email" className="form-label" style={{color:"purple"}}>Email 
                </label>
                <input style={{width:"225px",marginBottom:"15px"}} 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="you@example.com"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                />

                <label style={{marginBottom:"8px", color:"purple"}} htmlfor="password" className="form-label">Password 
                </label>
                <input style={{width:"225px",marginBottom:"5px"}} 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />

                <div className="d-grid gap-2" style={{width:"225px"}}>
                <button 
                type="button" 
                className="btn btn-outline-primary" 
                style={{}}
                onClick={onLoginBtnClick}
                >
                    Login
                        </button>

                </div>
            </div>
        </div>

    )
}

export default Login;