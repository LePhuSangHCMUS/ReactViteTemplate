import routes from '@Configs/routes';
import { useRoutes } from 'react-router-dom';
import {useSelector} from "react-redux"
function AppRoute() {
  const { isLoggedIn } = useSelector((state:any) => {
     return {
        isLoggedIn:state.auth
     }
    });
  const routing = useRoutes(routes(isLoggedIn));
  return (
    <>
      {routing}
    </>
  );
}
export default AppRoute