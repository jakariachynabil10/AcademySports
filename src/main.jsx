import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main.jsx";
import Home from "./Home/Home.jsx";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AllClasses from "./AllClasses/AllClasses.jsx";
import AllInstructor from "./AllInstructor/AllInstructor.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import AllUsers from "./AllUsers/AllUsers.jsx";
import MyClassCart from "./MyClassCart/MyClassCart.jsx";
import Payment from "./Payment/Payment.jsx";
import AddClass from "./AddClass/AddClass.jsx";
import MyClass from "./InstructorCls/MyClass.jsx";
import PrivetRoute from "./PrivetRoute/PrivetRoute.jsx";
import ManageClasses from "./ManageClasses/ManageClasses.jsx";
import AdminRoute from "./AdminRoute/AdminRoute.jsx";
import InstructorRoute from "./InstructorRoute/InstructorRoute.jsx";
import StudentRoute from "./StudentRoute/StudentRoute.jsx";
import PaymentHistory from "./PaymentHistory/PaymentHistory.jsx";
import Error from "./Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/allInstructors",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    errorElement : <Error></Error>,
    children: [
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path : 'myClassCart',
        element :<StudentRoute><MyClassCart></MyClassCart></StudentRoute>
      },
      {
        path : 'payment',
        element :<StudentRoute><Payment></Payment></StudentRoute>
      },
      {
        path : 'history',
        element : <PaymentHistory></PaymentHistory>
      },
      {
        path : 'addClass',
        element :<InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path : 'myClasses',
        element : <InstructorRoute><MyClass></MyClass></InstructorRoute>
      },
      {
        path : 'manageClasses',
        element : <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      }
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
