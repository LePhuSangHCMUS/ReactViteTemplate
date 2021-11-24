import routes from '@Configs/routes';
import { useRoutes } from 'react-router-dom';
import {useSelector} from "react-redux"
import { Fragment } from 'react';
function AppRoute() {
  const { isLoggedIn } = useSelector((state:any) => {
     return {
        isLoggedIn:state.auth
     }
    });
  const routing = useRoutes(routes(isLoggedIn));
  return (
    <Fragment>
      {routing}
    </Fragment>
  );
}
export default AppRoute