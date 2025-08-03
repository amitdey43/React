import { useState,useEffect, useContext } from "react";
import "./login.css"
import Username from "./username";
import { Authprovider } from "../../context/AuthContext";
function Login({handel,frontkhela}){
    let [email,setEmail]= useState("");
    let [pass,setPass]= useState("");
    let [prof,setProf]= useState("admin")
    let khela =(e)=>{
        e.preventDefault();
        handel(email,pass,prof);
        setEmail("");
        setPass("");
    }
    let [c,setC]= useState(false);
       
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
                    <h1>Login Page</h1>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter your email" id="email"/>
                    <input value={pass} onChange={(e)=>setPass(e.target.value)} required type="current-password" placeholder="Enter password" id="pass"/>
                    <h3 id="bhag" >Login As</h3>
                    <select id="select" value={prof} onChange={(e)=>setProf(e.target.value)} >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <button id="login" className="sobug">Log in</button>
                    <div className="check">
                        <label htmlFor="check" >Do not have an account</label>
                        <input type="checkbox" id="check" value={c} onChange={(e)=>setC(!c)}/>
                    </div>
                </form>
            </div>
            <button onClick={clear} id="clear" className="lal">Reset application</button>
        </div>
    );
}
export default Login