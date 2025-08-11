import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import UserSidebar from "../shared/UserSidebar/UserSidebar";


export default function UserDashboardLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <UserSidebar />
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
