
//layouts
import DashboardLayout from "@Layouts/DashboardLayout";
import MainLayout from "@Layouts/MainLayout";
//Pages
import Login from "@Pages/User/Login";
import Register from "@Pages/User/Register";
import React from "react";
import { Navigate, Outlet } from 'react-router-dom';


const routes = (isLoggedIn: any) => [
  //Same Private Route
  {
    path: '/',
    element: (isLoggedIn ? <DashboardLayout /> : <Navigate to="/user/login" />),
    children: [
      {
        path: '/dashboard',
        // element: <Dashboard />
      },
      // { path: '/account', element: <Account /> },
      {
        path: '/member',
        element: <Outlet />,
        children: [
          // { path: '/', element: <MemberGrid /> },
          // { path: '/add', element: <AddMember /> },
        ],
      },
      { path: '/', element: <Navigate to="/app/dashboard" /> },

    ],
  },
  //Same Public Route
  {
    path: '/',//Root
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { 
        path: '/user', 
        element: <Outlet />,
        children:[
          {
            path:"/user/login",
            element:<Login/>
          },
          {
            path:"/user/register",
            element:<Register/>
          }
        ]
    
      },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;