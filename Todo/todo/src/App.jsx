import { useState } from "react"
import Usercontext from "./context/context";


function App() {

  let [todos,setTodos]= useState([]);
  return (
    <Usercontext>
      <div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </Usercontext>
  )
}

export default App
