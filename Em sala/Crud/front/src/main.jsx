import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// configurações das rotas de client-side
// estamos utilizando a lib externa react-rounter-dom
// npm i react-rounter-dom
const router = createBrowserRouter([
  {
    path: '/',
    element: '<App />'
  }
]);

// ao inves de chumbar <App />
// passamos um provedor de rotas
// O RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
