import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mlist from './mlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mlist />
  </StrictMode>,
)
