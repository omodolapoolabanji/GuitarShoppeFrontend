import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, useParams} from 'react-router-dom'
import ErrorPage from './error-page.jsx'
import Guitars, {getGuitars, getAccessories} from './routes/Guitars.jsx'
import Search from './routes/Search.jsx'


const contextLoader = async ({params})=>{
  console.log(params.type)
  if (params.type === 'accessories'){
    return getAccessories()
  }
  return getGuitars()
}

const searchLoader = async ({params}) =>{
  console.log(params.query)
  const query = params.query
  return query
}

// console.log(contextLoader)



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
}, 

{
  path: "/search/:query",
  element:<Search  />,
  loader: searchLoader

}]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
