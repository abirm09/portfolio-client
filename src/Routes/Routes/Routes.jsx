import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Error404 from "../../Pages/Error404/Error404";
import Projects from "../../Pages/Projects/Projects";
import SingleProject from "../../Pages/SingleProject/SingleProject";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../layouts/Dashboard";
import Login from "../../Pages/Login/Login";

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
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project/:projectName",
        element: <SingleProject />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);
export default routes;
