
import "./header.css"
function Header({name,logouterkhela}) {
    let logoutkhela= ()=>{
        localStorage.removeItem("employeeData");
        localStorage.removeItem("adminData");
        localStorage.removeItem("loggedinuser");
        logouterkhela();
    }
    return ( 
        <div className="box">
            <h2>Hello <br/><span className="text">{name?name:"Admin"}👋</span></h2>
            <button id="logout" onClick={logoutkhela} className="lal">Log Out</button>
        </div>
    );
}

export default Header;