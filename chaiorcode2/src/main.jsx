import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contextapi from './context/contextapi.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contextapi>
      <App />
    </Contextapi>
    
  </StrictMode>
)
