import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import PlateView from "../pages/PlateView/PlateView";
import SellAPlate from "../pages/SellAPlate/SellAPlate";
import BuyAPlate from "../pages/BuyAPlate/BuyAPlate";


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
        path: "/sell-a-plate",
        element: <SellAPlate />,
      },
      {
        path: "plate-view",
        element: <PlateView></PlateView>,
      },
      {
        path: "/buy-a-plate",
        element: <BuyAPlate />,
      }
    ],
  },
]);
export default router;
