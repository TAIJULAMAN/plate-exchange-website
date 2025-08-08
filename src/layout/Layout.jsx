import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className=" mb-20 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
