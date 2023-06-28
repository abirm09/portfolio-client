import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Error404 from "../../Pages/Error404/Error404";
import Resume from "../../Pages/Resume/Resume";
import Projects from "../../Pages/Projects/Projects";
import SingleProject from "../../Pages/SingleProject/SingleProject";

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
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project/:projectName",
        element: <SingleProject />,
      },
    ],
  },
]);
export default routes;
