import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import Guitars, {getGuitars, getAccessories} from './routes/Guitars.jsx'

const contextLoader = async ({params})=>{
  console.log(params.type)
  if (params.type === 'accessories'){
    return getAccessories()
  }
  return getGuitars()
}

console.log(contextLoader)



const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    errorElement: <ErrorPage />
  },
{
  path: "/guitars/:type", 
  element: <Guitars />,
  loader: contextLoader,  
}, ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
