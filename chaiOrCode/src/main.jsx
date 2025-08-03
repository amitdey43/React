import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index1.css'
import App from './App2.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./component2/Home/home.jsx"
import About from "./component2/About/about.jsx"
import Contact from "./component2/Contact/contact.jsx"
import User from "./component2/user.jsx"
import Github, { gitinfo } from "./component2/github.jsx"
import Khela from './App1.jsx'
let rout= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        loader:gitinfo,
        path: "github",
        element: <Github/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={rout}/> */}
    <Khela/>
  </StrictMode>,
)
