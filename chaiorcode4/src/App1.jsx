import { useContext, useEffect, useState } from "react";
import Login from "./componenets/Auth/Login";
import Admin from "./componenets/Dashboard/AdminDashboard";
import Employee from "./componenets/Dashboard/EmployeeDashboard";
import { Authprovider } from "./context/AuthContext";
import Front from "./componenets/Auth/front";

function App1(){
    let {userdata}= useContext(Authprovider);
    
    let [user,setUser]= useState(null);
    
    let [em,setEm]= useState({});
    let {employees,setEmployees} = useContext(Authprovider);
    let [adminname,setAdminname]= useState({});
    useEffect(()=>{
       
            let u= JSON.parse(localStorage.getItem("loggedinuser"));
            let employeeData = JSON.parse(localStorage.getItem("employeeData"));
            let employeesdata= JSON.parse(localStorage.getItem("employees"));
            let a= JSON.parse(localStorage.getItem("adminData"));
            if(a){
                setAdminname(a);
            }
            setEmployees(employeesdata);
            if(u){
                setUser(u.role)
                if(employeeData){
                    setEm(employeeData);
                }
            }
    },[])
    let logouterkhela=()=>{
        setUser("");
    }
    let handeluser = (email,password,prof)=>{
        if(userdata && prof=="admin" && userdata.adata.find((a)=>a.email==email.trim() && a.password==password.trim())){
            let aa= userdata.adata.find((a)=>a.email==email.trim() && a.password==password.trim());
            localStorage.setItem("adminData",JSON.stringify(aa))
            localStorage.setItem("loggedinuser",JSON.stringify({role:"admin"}))
            setUser("admin")
            setAdminname(aa);
        }
        // if(email==="admin@e.com" && password==="12345"){
        //     localStorage.setItem("loggedinuser",JSON.stringify({role:"admin"}))
        //     setUser("admin")
        // }
        else if(userdata && prof=="user" && userdata.edata.find((e)=>e.email==email.trim() && e.password==password.trim())){
            let employee=(userdata.edata.find((e)=>e.email==email.trim() && e.password==password.trim()));
            
            localStorage.setItem("loggedinuser",JSON.stringify({role:"user"}))
            localStorage.setItem("employeeData",JSON.stringify(employee))
            setUser("user")
            setEm(employee);
        }
        else{
            alert("Username or password is incorrect");
        }
    } 
    
    return(
        <>
            {!user  ?<Front handel={handeluser}/>:''}
            {user=="admin"?<Admin logouterkhela={logouterkhela} adminname={adminname}/>:''}
            {user=="user"?<Employee em={em} setEm={setEm} logouterkhela={logouterkhela} adminname={adminname}/>:''}
            
        </>
    );
}
export default App1
