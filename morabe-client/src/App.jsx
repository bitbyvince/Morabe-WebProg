import { createBrowserRouter, RouterProvider } from "react-router-dom";

// HomePage Structure
import Layout from "./components/Layout";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
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
