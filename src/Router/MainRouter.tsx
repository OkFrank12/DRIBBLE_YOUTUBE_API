import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import DribbleScreen from "../Pages/DribbleScreen";
import YouTube from "../Pages/YouTube";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DribbleScreen />,
      },
      {
        index: true,
        path: "/youtube",
        element: <YouTube />,
      },
    ],
  },
]);
