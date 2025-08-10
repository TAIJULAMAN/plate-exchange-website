import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import PlateView from "../pages/PlateView/PlateView";
import PlateDetails from "../pages/PlateDetails/PlateDetails";
import RecentlySold from "../pages/RecentlySold/RecentlySold";
import AllPlates from "../pages/RecentlySold/AllPlates";
import GuideAndBlog from "../pages/Guide&Blog/GuideAndBlog";
import FaqPage from "../pages/Faq/FaqPage";
import Reviewsandtestimonials from "../pages/Reviewsandtestimonials/Reviewsandtestimonials";



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
                  {
        path: "recently-sold",
        element: <RecentlySold></RecentlySold>,
      },
                        {
        path: "load-all-plates",
        element: <AllPlates></AllPlates>,
      },
      {
        path: "guide-and-blog",
        element: <GuideAndBlog></GuideAndBlog>,
      },
            {
        path: "faq",
        element: <FaqPage></FaqPage>
      },
      {
        path: "Reviewsandtestimonials",
        element: <Reviewsandtestimonials></Reviewsandtestimonials>
      },
    
      

    ],
  },
]);
export default router;
