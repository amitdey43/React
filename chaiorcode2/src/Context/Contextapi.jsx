import { createContext, useState } from "react";

export let Userapi = createContext();
function Contextapi({children}){
    let [data,setData]= useState('');
    return (
        <div>
            <Userapi value={{data,setData}}>
                {children}
            </Userapi>
        </div>
    );
}
export default Contextapi