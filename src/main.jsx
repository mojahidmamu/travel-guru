import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Header/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Header from './Component/Header/Header.jsx';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

  },
  {
    path: "/header",
    element: <Header></Header>

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
