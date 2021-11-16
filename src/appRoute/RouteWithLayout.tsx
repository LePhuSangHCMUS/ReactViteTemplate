import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function RouteWithLayout( props:any) {
  const { page, layout, path, isPrivate, ...rest } = props;
  return (
    isPrivate ? <PrivateRoute page={page} path={path} layout={layout} {...rest} /> : <PublicRoute page={page} path={path} layout={layout} {...rest} />
  );
}
export default RouteWithLayout;