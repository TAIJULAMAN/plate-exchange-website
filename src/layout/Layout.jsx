import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

export default function Layout() {
  return (
    <main className="font-manrope overflow-hidden">
      <Navbar />
      <div className="min-h-screen bg-[#f6f6f6]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
