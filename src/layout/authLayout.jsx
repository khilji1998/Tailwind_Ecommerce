import React from "react";
import { Outlet } from "react-router-dom";
import shoppingImg from "../../src/assets/images/shopping.png";
function AuthLayout() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={shoppingImg}
            alt=""
            className="w-full h-64 md:h-screen object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
