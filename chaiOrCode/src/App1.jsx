import React,{ useState } from "react";
import useHook from "./hook/useHook";
import Inputbox from "./component/inputbox.jsx"
import "./index.css"
function Khela(){
    let [amount,setAmount]= useState(0);
    let [currency,setcurrency]= useState(0);
    let [to,setTo]= useState("USD");
    let [from,setFrom]= useState("INR");
     
    let convertC= useHook(to,from);
    let convert= ()=>{
        setcurrency(amount*convertC);
    } 
    let swap= ()=>{
        setAmount(currency);
        setcurrency(amount);
        setFrom(to);
        setTo(from);
    }
    let f="From";
    let t="To"
    return (
        <div id="mainbox"> 
            <div className="firstbox">
                <Inputbox 
                    label={f}
                    type={from}
                    stat={false}
                    amountt={amount}

                    onCurrency= {(cur)=>{
                        setFrom(cur);
                    }}
                    onAmountChange= {(ee)=>{
                        setAmount(ee);
                    }}
                />
            </div>
            <div>
                <button onClick={swap} id="swap">swap</button>
            </div>
            <div className="firstbox">
                <Inputbox
                    label={t}
                    type={to}
                    stat={true}
                    amountt={currency}
                    onCurrency={(cur)=>{
                        setTo(cur);
                    }}
                />
            </div>
            <button onClick={convert} id="converter">Convert {from} to {to}</button>
        </div>
    );
}
export default Khela;