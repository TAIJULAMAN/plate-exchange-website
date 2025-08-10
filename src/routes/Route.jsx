import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import PlateView from "../pages/PlateView/PlateView";
import SellAPlate from "../pages/SellAPlate/SellAPlate";
import BuyAPlate from "../pages/BuyAPlate/BuyAPlate";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import PlateDetails from "../pages/PlateDetails/PlateDetails";
import RecentlySold from "../pages/RecentlySold/RecentlySold";
import AllPlates from "../pages/RecentlySold/AllPlates";
import GuideAndBlog from "../pages/Guide&Blog/GuideAndBlog";
import FaqPage from "../pages/Faq/FaqPage";
import Reviewsandtestimonials from "../pages/Reviewsandtestimonials/Reviewsandtestimonials";

import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Otp from "../pages/Auth/Otp";
import ResetPassword from "../pages/Auth/ResetPassword";
import SignUp from "../pages/Auth/SignUp";


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
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/verify-mail",
        element: <Otp />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
