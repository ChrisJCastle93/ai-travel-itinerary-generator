import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/LogIn";
import InputForm from '../components/Tool/InputForm'
import Signup from "../pages/Signup";
import ProtectedPage from "../pages/ProtectedPage";
import * as PATHS from "../utils/paths";
import ToolContainer from "../components/Tool/ToolContainer";

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
