import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import PlateView from "../pages/PlateView/PlateView";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "sell-a-plate",
        element: <>asdf</>,
      },
      {
        path: "plate-view",
        element: <PlateView></PlateView>,
      }
    ],
  },
]);
export default router;
