import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import PlateView from "../pages/PlateView/PlateView";
import PlateDetails from "../pages/PlateDetails/PlateDetails";



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
      },
            {
        path: "plate-details/:id",
        element: <PlateDetails></PlateDetails>,
      },

    ],
  },
]);
export default router;
