import { createBrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import Contact from "./Contact";
import Home from "./home";
import Detail from "./detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

export default router;
