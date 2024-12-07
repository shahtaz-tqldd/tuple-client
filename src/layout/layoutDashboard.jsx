import Footer from "@/components/footer/footer";
import TopNavbar from "@/components/navbar/TopNavbar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TopNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
