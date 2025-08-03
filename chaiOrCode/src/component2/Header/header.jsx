import sr from "../../assets/khela.png"; 
import {NavLink,Link} from "react-router-dom"
function header(){
    return (
        <div>
        <img src={sr} alt="" />
        <NavLink to="/"
            className={({isActive})=>( isActive? "nav1":"Nav1")}
        >
            Home
        </NavLink>
        <NavLink to="/about"
            className={({isActive})=>( isActive? "nav2":"Nav2")}>
            About
        </NavLink>
        <NavLink to="/contact"
            className={({isActive})=>( isActive? "nav3":"Nav3")}
        >
            Contact Us
        </NavLink>
        <Link to="./github">
            Git Hub
        </Link>
        
        <Link to="#">
            Log In
        </Link>
        <Link to="#">
            Get Started
        </Link>
        </div>
    );
}
export default header;