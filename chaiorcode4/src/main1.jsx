import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import Authc from './context/AuthContext.jsx'



createRoot(document.getElementById('root')).render(
 
    <Authc>
      
          <App1/>
      
    </Authc>
  
)
