import { useContext } from "react";
import { useState } from "react";
import { Userapi } from "./context/contextapi";

function Login(){
    let [user,setUser]= useState('');
    let [password,setPassword]= useState('');
    let {setData} = useContext(Userapi)
    function khela(e){
        e.preventDefault();
        setData({user,password})
    }
    return (
        <div>
            <h1>Login page</h1>
            <form  onSubmit={khela}>
                <input type="text" placeholder="Enter Username" 
                value={user} onChange={(e)=>setUser(e.target.value)}/>
                <input type="password" placeholder="Enter Password" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default Login