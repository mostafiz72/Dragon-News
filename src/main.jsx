import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Career from './Components/Career.jsx';
import CategoryNews from './Components/News/CategoryNews.jsx';
import LoginPage from './Components/LoginPage.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import ReadNews from './Components/ReadNews.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", 
        element: <Navigate to={"/category/01"}></Navigate>,
        },       
      { path: "/category/:id", 
        element: <CategoryNews />,
        loader: ( {params} ) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  { path: "/news/:id", 
    element: <PrivateRoute><ReadNews /></PrivateRoute>,
    loader: ( {params} ) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  { path: "/about", 
    element: <About />,
  },
  { path: "/career", 
    element: <Career />,
  },
  { path: "/login", 
    element: <LoginPage />
  },
  { path: "/register", 
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
