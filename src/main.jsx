import React from 'react';
import App from './App.jsx';
import './index.css';

import  ReactDOM  from 'react-dom/client';
import Home from './Pages/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'home',
    element:<Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
