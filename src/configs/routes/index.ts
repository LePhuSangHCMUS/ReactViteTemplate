
import { lazy } from 'react';
//lazy(() => import('@Pages/Home/Home'))
import DefaultLayout from '@Layouts/DefaultLayout/DefaultLayout';
import UserLayout from '@Layouts/UserLayout/UserLayout';
//PAGE
import Home from '@Pages/Home/Home';
import Login from '@Pages/Login/Login';
export default [
  {
    label: "Home",
    path: '/',
    exact: true,
    isPrivate:false,
    page:Home ,
    layout: DefaultLayout
  },
  {
    label: "Login",
    path: '/user/login',
    exact: true,
    isPrivate:false,
    page: Login,
    layout:UserLayout
  },

































  //Alway Pick Downlevel
  {
    label: "Page Not Found",
    path: '/',
    exact: false,
    isPrivate:false,
    page: lazy(() => import("@Pages/PageNotFound/PageNotFound")),
    layout: lazy(() => import('@Layouts/EmptyLayout/EmptyLayout'))
  },
] 
