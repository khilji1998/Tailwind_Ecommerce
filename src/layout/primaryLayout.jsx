import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
function PrimaryLayout() {
  return (
    <>
      <Header />
      <div class="container px-6 py-8 mx-auto lg:flex lg:-mx-2">
      <SideBar/>
      <Outlet />
      </div>
     
      <Footer />
    </>
  );
}

export default PrimaryLayout;
