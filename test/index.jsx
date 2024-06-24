import React, { useState } from "react"
import './LoginSignup.css'

const [action, setAction]=useState("Sign Up")

return(
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
    
    <div className="inputs">
        {action === "Login"? <div></div> :
            <div className="input">
                <input type="text" placeholder="Name" />
            </div>
        }
    
    <div className="input">
        <input type="email" placeholder="Email" />
    </div>
    <div className="input">
        <input type="password" placeholder="password" />
        </div>
    </div>
    {action === "Login"? <div></div>:
     <div className="f-p"><span>Forgot Password?</span></div>
    }
    <div className="submit-container">
        <div className={action === "Login"? "submit gray": "submit"}
        onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up"? "submit gray": "submit"}
        onClick={() => { setAction("Login") }}>Login</div>
    </div>
</div>
    
    )

    export default LoginSignup