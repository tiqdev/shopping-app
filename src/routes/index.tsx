import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Detail from "@/pages/detail";
import NotFound from "@/pages/404";
import MainLayout from "@/layouts/main-layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
