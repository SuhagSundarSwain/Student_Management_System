import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./LoginPage";
import LoginForm from "../components/LoginPage/LoginPageContainer/RightLoginFlex/LoginForm/LoginForm";
import SignUpForm from "../components/LoginPage/LoginPageContainer/RightLoginFlex/SignupForm/SignupForm";
import Body from "../components/Body/Body";
import ResultPage from "../components/ResultPage/ResultPage";
import DashboardPage from "../components/DashboardPage/DashboardPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          { path: "/result", element: <ResultPage /> },
          { path: "/dashboard", element: <DashboardPage /> },
        ],
      },

      {
        path: "/auth",
        element: <LoginPage />,
        children: [
          { path: "/auth/login", element: <LoginForm /> },
          { path: "/auth/signup", element: <SignUpForm /> },
        ],
      },
    ],
  },
]);

export default router;
