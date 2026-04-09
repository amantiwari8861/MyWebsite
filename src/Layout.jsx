import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatAgent from "./pages/Home/ChatAgent";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-16 pb-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      <ChatAgent/>

    </div>
  );
};

export default Layout;