import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from './Home/Home.jsx';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllClasses from './AllClasses/AllClasses.jsx';
import AllInstructor from './AllInstructor/AllInstructor.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/allClasses',
        element : <AllClasses></AllClasses>
      },
      {
        path : '/allInstructors',
        element : <AllInstructor></AllInstructor>
      }
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
     <QueryClientProvider client={queryClient}>
     
     <RouterProvider router={router} />
    
    </QueryClientProvider>
  </React.StrictMode>,
)
