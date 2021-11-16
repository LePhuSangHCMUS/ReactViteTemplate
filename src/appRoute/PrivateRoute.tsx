import React from 'react'
// import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

// import { getAuth } from '@/selectors'

interface PrivateRouteProps extends RouteProps {
  page: any,
  path:string,
  layout:any
}

 const PrivateRoute: React.FC<PrivateRouteProps> = ({ page,path,layout, ...rest }) => {
  // const { isAuthenticated } = useSelector(getAuth)
  const  isAuthenticated  = true;

  return (
    <Route
    path={path}
    render={(props) =>
        isAuthenticated === true ?React.createElement( layout, props, React.createElement(page,  {...props,...rest}))
         :
          <Redirect to="/" />
      }
      {...rest}
    />

  )
}

export default PrivateRoute
