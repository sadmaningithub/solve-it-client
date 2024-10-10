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
import Update from './pages/Update';
import AuthProvider from './providers/AuthProvider';
import SubmitPage from './pages/SubmitPage';
import AllPending from './pages/AllPending';
import Mark from './pages/Mark';
import MarkAssignment from './pages/MarkAssignment';

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
        loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path: '/assignments/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/assignments/update/${params.id}`)
      },
      {
        path: '/createAssignment',
        element: <Create></Create>
      },
      {
        path: '/pendingAssignments',
        element: <AllPending></AllPending>,
        loader: ()=> fetch('http://localhost:5000/submitted')
      },
      {
        path: '/myPendingAssignments',
        element: <Pending></Pending>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/assignment/pending/:id',
        element: <Mark></Mark>,
        loader: ({params}) => fetch(`http://localhost:5000/assignment/pending/${params.id}`)
      },
      {
        path: '/assignment/mark/:id',
        element: <MarkAssignment></MarkAssignment>,
        loader: ({params}) => fetch(`http://localhost:5000/assignment/mark/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'assignments/submit/:id',
        element: <SubmitPage></SubmitPage>,
        loader: ({params}) => fetch(`http://localhost:5000/assignments/submit/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
