import { createBrowserRouter } from "react-router-dom";

// LAYOUTS
import Layout from "./layout/layoutDashboard";

// PAGES
import ErrorPage from "./pages/common/errorPage";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import Homepage from "./pages/home";
import PropertiesPage from "./pages/properties";
import PropertyDetailsPage from "./pages/properties/property-details";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/properties",
        element: <PropertiesPage />,
      },
      {
        path: "/properties/:name",
        element: <PropertyDetailsPage />,
      },
    ],
  },
  { path: "/sign-in", element: <LoginPage /> },
  { path: "/create-account", element: <RegisterPage /> },
  { path: "*", element: <ErrorPage /> },
]);
