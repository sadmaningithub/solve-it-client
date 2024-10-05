import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layouts/Root';
import Assignments from './pages/Assignments';
import Pending from './pages/Pending';
import Create from './pages/Create';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import AssignmentDetails from './pages/AssignmentDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>
      },
      {
        path: '/assignments/:id',
        element: <AssignmentDetails></AssignmentDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path: '/createAssignment',
        element: <Create></Create>
      },
      {
        path: '/pendingAssignments',
        element: <Pending></Pending>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
