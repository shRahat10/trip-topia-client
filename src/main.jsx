import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './router/Router';
import AuthProvider from './pages/provider/AuthProvider';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
