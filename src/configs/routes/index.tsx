import { Navigate, Outlet } from 'react-router-dom';
import React from "react"
import DefaultLayout from "@Layouts/DefaultLayout/DefaultLayout";
import EmptyLayout from "@Layouts/EmptyLayout/EmptyLayout";
import DashboardLayout from "@Layouts/DashboardLayout/DashboardLayout";
import MainLayout from "@Layouts/MainLayout/MainLayout";
import Login from "@Pages/Login/Login";

const routes = (isLoggedIn: any) => [
  {
    path: '/',
    element: (isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />),
    children: [
      {
        path: '/dashboard',
        // element: <Dashboard />
      },
      // { path: '/account', element: <Account /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      // {
      //   path: '/member',
      //   element: <Outlet />,
      //   children: [
      //     { path: '/', element: <MemberGrid /> },
      //     { path: '/add', element: <AddMember /> },
      //   ],
      // },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;