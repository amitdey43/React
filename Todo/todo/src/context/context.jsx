import { createContext } from "react"

let Todocontext= createContext();
function Usercontext({mal,children}){
    return (
       <Todocontext.Provider value={mal}>
            {children}
       </Todocontext.Provider>
    )
}
export default Usercontext