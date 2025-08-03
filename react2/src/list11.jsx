import { createContext,useEffect } from "react"
import List2 from "./list12.jsx"
export let Apple= createContext();
let st= "amit kumar dey"
function list(){ 
    return (
        <div className="har">
        <h1 >Amit Kumar Dey</h1>
        <p>{`list ${st}`}</p>
        <Apple.Provider value={st}>
            <List2 user={st}/>
        </Apple.Provider>
        </div>
    );
}
export default list