import { createBrowserRouter, RouterProvider } from "react-router-dom";

// HomePage Structure
import Layout from "./components/Layout";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticleListPage from "./Pages/ArticleListPage";
import NotFoundPage from "./Pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    // Error element
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/articles",
        element: <ArticleListPage />,
      },
      {
        path: "/articles/:name",
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
