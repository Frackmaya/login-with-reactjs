import react from "react-dom"
import {Link} from "react-router-dom"

const Register = ()=>{
return(
    <div className="register">
        <div className="form-reg">
            <form action="" method="POST" className="r-form">
            <h2>TCMS - REGISTER</h2>
<div className="name">
    <label htmlFor="First">
        <input type="text" placeholder="First Name" id="First"/>
    </label>
    <label htmlFor="Last">
        <input type="text" placeholder="Last Name" id="Last"/>
    </label>
</div>
<div className="contact">
    <label htmlFor="Phone">
        <input type="text" name="" placeholder="Phone Number" id="phone"/>
    </label>

    <label htmlFor="Email">
        <input type="Email"placeholder="Email Address" id="Email"/>
    </label>
</div>
<div className="location">
    <label htmlFor="address">
        <input type="text" placeholder="Home Address" id="address"/>
    </label>
    <label htmlFor="Block">
        <input type="text" placeholder="Block And Room No:" id="Block"/>
    </label>
</div>
<div className="sign">
    <div className="gender">
        <h4>Gender</h4>
         <div className="male">Male <input type="radio" name=""/></div>
         <div className="female">Female <input type="radio" name=""/></div>
    </div>
    <div className="to-sign">
<button>SIGN-UP</button>
<h4>Already Have an Account? <span><Link to="/">Log-In</Link></span></h4>
    </div>
</div>
            </form>
            
        </div>
    </div>
)
}
export default Register