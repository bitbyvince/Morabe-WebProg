import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

// HomePage Structure
import Layout from "./layouts/Layout";
import ArticlePage from "./Pages/LandingPages/ArticlePage";
import HomePage from "./Pages/LandingPages/HomePage";
import AboutPage from "./Pages/LandingPages/AboutPage";
import ArticleListPage from "./Pages/LandingPages/ArticleListPage";

import AuthLayout from "./layouts/AuthLayout";
import DashLayout from "./layouts/DashLayout";
import SignInPage from "./pages/AuthPages/Login";
import SignUpPage from "./pages/AuthPages/SignUpPage";

import DashboardPage from "./Pages/DashboardPages/DashboardPage";
import ReportsPage from "./Pages/DashboardPages/ReportsPage"; 
import UserPage from "./Pages/DashboardPages/UserPage";
import DashArticleListPage from "./Pages/DashboardPages/DashArticleListPage";

import NotFoundPage from "./Pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    // Error element
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "articles",
        element: <ArticleListPage />,
      },
      {
        path: "articles/:name",
        element: <ArticlePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "articles",
        element: <DashArticleListPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
