import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import EmptyList from "../Components/Shared/EmptyList/EmptyList";
import CreateBlog from "../Pages/CreateBlog/CreateBlog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<EmptyList></EmptyList>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path: '/create-blog',
          element:<CreateBlog></CreateBlog>,
        }
      ]

    },
  ]);

  export default router;