import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function github(){
    let data= useLoaderData();
    // let [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <div>
            <h1>followers: {data.followers}</h1>
            <div  id="ohh"> 

            <img src={data.avatar_url} />
            </div>
        </div>
    );
}
export default github
export let gitinfo= async()=>{
    let a= await fetch("https://api.github.com/users/hiteshchoudhary");
    let b= await a.json();
    return b;
}