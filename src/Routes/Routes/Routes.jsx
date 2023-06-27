import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Portfolio from "../../Pages/Portfolio/Portfolio";
import Error404 from "../../Pages/Error404/Error404";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
export default routes;
