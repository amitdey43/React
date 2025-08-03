import { createContext, useEffect, useState } from "react";
import { getlocalstorage, setlocalstorage } from "../utilis/LocalStorage.jsx";
export let Authprovider= createContext();
function Authc({children}) {
    let [employees,setEmployees]= useState(()=>{
        let storedEmployees = localStorage.getItem("employees");
        return storedEmployees ? JSON.parse(storedEmployees) : [];
    });
    let [admin,setAdmin]= useState(()=>{
        let stored= localStorage.getItem("admin");
        return stored ? JSON.parse(stored) : [];
    })
    let [userdata,setUserdata]= useState(null)
    useEffect(()=>{
        localStorage.setItem("employees",JSON.stringify(employees));
        let {edata,adata}= getlocalstorage()
        setUserdata({edata,adata})
    },[employees])
    // useEffect(()=>{
    //     localStorage.setItem("admin",JSON.stringify(admin));
    //     let {edata,adata}= getlocalstorage()
    //     setAdmin(adata);
    // },[admin])
    return (
        <>
        <Authprovider.Provider value={{userdata,employees,setEmployees,setUserdata,admin,setAdmin}}>
            {children}
        </Authprovider.Provider>
        </>
    );
}

export default Authc;