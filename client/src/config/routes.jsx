import { Navigate } from "react-router-dom";
import HomePage from "../views/HomePage";
import Login from "../views/LogIn";
import ToolContainer  from '../components/Tool/ToolContainer'
import Signup from "../views/Signup";
import ProtectedPage from "../views/ProtectedPage";
import * as PATHS from "../utils/paths";
import Dashboard from "../views/Dashboard";

const routes = (props) => {
  const { user } = props;
  return [
    {
      path: PATHS.HOMEPAGE,
      element: <HomePage {...props} />,
    },
    {
      path: PATHS.SIGNUPPAGE,
      element: <Signup {...props} />,
    },
    {
      path: PATHS.INPUTFORM,
      element: <ToolContainer {...props} />,
    },
    {
      path: PATHS.LOGINPAGE,
      element: <Login {...props} />,
    },
    {
      path: PATHS.DASH,
      element: <Dashboard {...props} />,
    },
    {
      path: PATHS.PROTECTEDPAGE,
      element: user ? (
        <ProtectedPage {...props} />
      ) : (
        <Navigate to={PATHS.LOGINPAGE} replace />
      ),
    },
  ];
};

export default routes;
