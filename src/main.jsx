import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './components/Phones.jsx';
import Main from './components/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: ()=> fetch('http://localhost:3000/phones')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
