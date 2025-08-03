import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mcard from "./mcard.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mcard></Mcard>
  </StrictMode>,
)
