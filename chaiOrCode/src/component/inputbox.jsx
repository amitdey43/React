import { useId ,useRef} from "react";
import List from "./list.js"
function inputbox({label="",type,stat,amountt,onCurrency,onAmountChange}){
    let idd= useId();
    let country=[];
    let k= List();
    for(let key in k){
        country.push(key);
    }
    let dabo= useRef();
    let set= ()=>{
        setTimeout(()=>{
            dabo.current.style.backgroundColor="rgba(219, 221, 223, 0.723"
        },0)
        setTimeout(()=>{
            dabo.current.style.backgroundColor="transparent"
        },1000)
    }
    return (
        <div className="mainkhela">
            <div className="first">
                <label htmlFor={idd}>
                    {label}
                </label>
                <input type="text" id={idd}
                    value={amountt}
                    onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
                    disabled={stat}
                    onClick={set}
                    ref={dabo}
                />
            </div>
            <div className="second">
                <label htmlFor="ggg">Currency Type</label>
                <select id="ggg" value={type} onChange={(e)=>onCurrency(e.target.value)}> 
                    {country.map((coun,idx)=>(
                        <option key={idx} value={coun}>{coun}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
export default inputbox