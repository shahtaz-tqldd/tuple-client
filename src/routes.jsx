import { createBrowserRouter } from "react-router-dom";

// LAYOUTS
import Layout from "./layout/layoutDashboard";

// PAGES
import ErrorPage from "./pages/common/errorPage";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Homepage from "./pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  { path: "/sign-in", element: <LoginPage /> },
  { path: "/create-account", element: <RegisterPage /> },
  { path: "*", element: <ErrorPage /> },
]);
