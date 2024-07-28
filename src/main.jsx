import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import router from './Router/router';
import { ContextBLog } from './Pages/ContextBlog/ContextBLog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider >
   <ContextBLog>
   <RouterProvider router={router} />
   </ContextBLog>
    </HelmetProvider>
   
  </React.StrictMode>,
)
