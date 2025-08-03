import { useState } from "react";
import Login from "./Login";
import Signup from "./signup";

function Front({handel}) {
    let [fu,setFu]= useState(false);
    let frontkhela= ()=>{
        setFu((fu)=>!fu);
    }
    
    return ( 
        <>
            {fu? <Login handel={handel} frontkhela={frontkhela}/>:<Signup frontkhela={frontkhela}/>}
        </>
    );
}

export default Front;