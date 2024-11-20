import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import Create from "./pages/Create";
import { loader as postsLoader } from "./pages/Posts";
import { loader as detailsLoader } from "./pages/Details";
import { action as createAction } from "./components/PostForm";
import { action as deleteAction } from "./pages/Details";
import { action as updateAction } from "./components/PostForm";

import Details from "./pages/Details";
import { Edit } from "./pages/Edit";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
          action: createAction,
        },
        {
          path: ":id",
          loader: detailsLoader,
          id: "post-detail",
          children: [
            {
              index: true,
              element: <Details />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: updateAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
