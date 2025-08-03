import React,{useEffect,useState} from "react"
let useHook = (cCurrency,bCurrency)=>{
    let [deta,setData]= useState(0);
    useEffect(()=>{ 
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_cvWfSsgicCTOvKUwB89RJ56IxOvbzi1ESlyX4qgv&currencies=${cCurrency}&base_currency=${bCurrency}`)
        .then((res)=>res.json())
        .then((dat)=>setData(dat.data[cCurrency]))
    },[bCurrency,cCurrency])
    return deta;
}
export default useHook;