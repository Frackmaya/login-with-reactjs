import react from "react-dom"
import {  Link } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

import Home from "./Home"
import Register from "./Register"

const Login = ()=>{

return(
    <div className="login">
       <div className="form-container">
       <form className="login-form">
 <h2>TCMS - LOGIN</h2>
    <label htmlFor="email" className="email-label">
    <MdEmail size="1.5rem"/>
        <input type="text" placeholder="  Email" id="email" />
    </label>
       <label htmlFor="password" className="password-label">
        <input type="text" placeholder="  password " id="password"/>
        <AiFillEye size="1.5rem"/>
    </label>
    <div className="fp">Forgot password? </div>
    <button>LOG-IN</button>
    <div>Do not Have a profile? <span><Link to="/Register">Sign-up</Link></span></div>
       </form>
        </div>
    </div>
)
}
export default Login