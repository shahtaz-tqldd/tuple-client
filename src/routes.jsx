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
import AgentPage from "./pages/agent";
import AboutPage from "./pages/about";
import ContactUsPage from "./pages/contact-us";
import TermsAndConditionsPage from "./pages/common/termsPage";
import PrivacyPolicyPage from "./pages/common/privacyPage";
import BlogPage from "./pages/blogs";

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
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/agents",
        element: <AgentPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
    ],
  },
  { path: "/sign-in", element: <LoginPage /> },
  { path: "/create-account", element: <RegisterPage /> },
  { path: "*", element: <ErrorPage /> },
]);
