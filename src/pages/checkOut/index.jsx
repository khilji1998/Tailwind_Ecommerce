import { useContext } from "react";
import ProductCart from "../productDetails/productCart";
import { GlobalContext } from "../../context/globalState";

import { PaymentForm } from "./components/paymentForm";
import CheckOutCard from "./components/checkOutCard/index";

export const CheckOut = () => {
 const { open} = useContext(GlobalContext);
  return (
    <>
      <div class="flex flex-wrap w-full px-10 my-3">
        <CheckOutCard/>
        <PaymentForm/>
      </div>
      {open && <ProductCart />}
    </>
  );
};
