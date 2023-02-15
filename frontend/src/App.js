import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage, { loader as blogListLoader } from "./pages/HomePage";
import BlogPage, { loader as blogLoader } from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: blogListLoader,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "blog/:blogId",
        element: <BlogPage />,
        loader: blogLoader,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
