import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
function PrimaryLayout() {
  return (
    <>
      <Header />
      <div class="flex">
      <SideBar/>
      <Outlet />
      </div>
     
      <Footer />
    </>
  );
}

export default PrimaryLayout;
