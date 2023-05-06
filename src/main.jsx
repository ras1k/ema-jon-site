import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop/>
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
