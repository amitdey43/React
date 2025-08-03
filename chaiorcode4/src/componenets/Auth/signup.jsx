import { useContext, useEffect, useState } from "react";
import "./login.css"
import Username from "./username";
import { Authprovider } from "../../context/AuthContext";
import { setlocalstorage } from "../../utilis/LocalStorage.jsx";
function Signup({frontkhela}){
    let [email,setEmail]= useState("");
    let [pass,setPass]= useState("");
    let [prof,setProf]= useState("admin")
    let [usernam,setUsernam]= useState("");

    let [c,setC]= useState(false)
    let {userdata}= useContext(Authprovider);
    let {employees,setEmployees}= useContext(Authprovider);
    
    let {admin,setAdmin,setUserdata}= useContext(Authprovider);
    let khela =(e)=>{
        e.preventDefault();
        if (
            userdata?.adata?.some((a) => a.email === email) || 
            userdata?.edata?.some((e) => e.email === email)
        ) {
            alert("This email is already in use");
        }
        
        else if(prof=="user"){
            let employee= {
                "name":usernam.toUpperCase().trim(),
                "email":email.trim(),
                "password":pass.trim(),
                "taskCounts":{
                    "active":0,
                    "newtask":0,
                    "completed":0,
                    "failed":0
                },
                "tasks":[]
            }
            if(employees){
                setEmployees((p)=>[...p,employee])
            }
            else{
                setEmployees((p)=>[employee])
            }
        } 
        else{
            let admins= {
                "name": usernam.toUpperCase().trim(),
                "email":email.trim(),
                "password":pass.trim(),
            }
            setAdmin((a)=>[...a,admins])
            setUserdata((prev) => ({
                ...prev,
                adata: [...prev.adata, admins] 
            }));
        }
        setEmail("");
        setPass("");
        setUsernam("");

    }
    useEffect(()=>{
        if(employees){
            localStorage.setItem("employees",JSON.stringify(employees));
        }
    },[employees])
    useEffect(()=>{
        if(admin){
            localStorage.setItem("admin",JSON.stringify(admin));
        }
    },[admin])
    useEffect(()=>{
        if(c){
            frontkhela();
        }
    },[c])
    let clear=()=>{
        localStorage.clear();
        setTimeout(()=>{
            window.location.reload();
        },200)
    }
    return (
        <div id="mainkhela">
            <div id="khela">
                <form id="form" onSubmit={khela}>
                    <h1>Signup Page</h1>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter your email" id="email"/>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} required type="current-password" placeholder="Choose password" id="pass"/>
                    <h3 id="bhag" >Sign in As</h3>
                    <select id="select" value={prof} onChange={(e)=>setProf(e.target.value)} >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <Username khela={{usernam,setUsernam}}/>
                    <button id="login" className="sobug">Sign up</button>
                    <div className="check">
                        <label htmlFor="check" >Already have an account</label>
                        <input type="checkbox" id="check" value={c} onChange={(e)=>setC(!c)}/>
                    </div>
                </form>
            </div>
            <button onClick={clear} id="clear" className="lal">Reset application</button>
        </div>
    );

    
}
export default Signup