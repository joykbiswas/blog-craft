import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import EmptyList from "../Components/Shared/EmptyList/EmptyList";
import CreateBlog from "../Pages/CreateBlog/CreateBlog";
import BlogListDetails from "../Components/BlogListDetails/BlogListDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EmptyList></EmptyList>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/create-blog",
        element: <CreateBlog></CreateBlog>,
      },
      {
        path: "/details/:id",
        element: <BlogListDetails></BlogListDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
    ],
  },
]);

export default router;
