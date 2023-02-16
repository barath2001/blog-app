import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage, { loader as blogListLoader } from "./pages/HomePage";
import BlogPage, {
  loader as blogLoader,
  action as deleteBlogAction,
} from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import NewBlogPage, { action as newBlogAction } from "./pages/NewBlogPage";
import EditBlogPage, { action as editBlogAction } from "./pages/EditBlogPage";

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
        id: "blog-detail",
        loader: blogLoader,
        children: [
          {
            index: true,
            element: <BlogPage />,
            action: deleteBlogAction,
          },
          {
            path: "edit",
            element: <EditBlogPage />,
            action: editBlogAction,
          },
        ],
      },
      {
        path: "blog/new",
        element: <NewBlogPage />,
        action: newBlogAction,
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
