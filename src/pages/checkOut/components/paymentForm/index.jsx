import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../context/globalState";
import { FaAt, FaCreditCard, FaGlobe } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import OrderDetail from "../orderDetails";

export const PaymentForm = () => {
  const { toggleModal ,setIsBillModalOpen ,billFormData,setBillFormData} = useContext(GlobalContext);
  const [checkOutForm, setCheckOutForm] = useState({
    email: "",
    cardholder: "",
    carddetails: { cardno: "", carddate: "", cardcvv: "" },
    billingdetails: { address: "", state: "", zip: "" },  
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name in checkOutForm) {
      setCheckOutForm({
        ...checkOutForm,
        [name]: value,
      });
    } else {
      // If the input field is nested inside carddetails or billingaddress
      const [outerKey, innerKey] = name.split(".");
      setCheckOutForm({
        ...checkOutForm,
        [outerKey]: {
          ...checkOutForm[outerKey],
          [innerKey]: value,
        },
      });
    }
    console.log(checkOutForm)
  };
  const { cartData, quantity, calculateTotalPrice } =
    useContext(GlobalContext);
  const totalAfterShipping = cartData
    .reduce((total, item) => total + item.price * quantity[item.id] + 10, 0)
    .toFixed(2);
  const handleCheckoutForm = (event) => {
    event.preventDefault();
    setBillFormData([...billFormData, checkOutForm]);
    console.log(billFormData);
    setIsBillModalOpen(true)
  };
 
  return (
    <>
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p class="text-xl font-medium">Payment Details</p>
        <p class="text-gray-400">
          Complete your order by providing your payment details.
        </p>
        <form onSubmit={handleCheckoutForm}>
          <label for="email" class="mt-4 mb-2 block text-sm font-medium">
            Email
          </label>
          <div class="relative">
            <input
              type="text"
              id="email"
              name="email"
              value={checkOutForm?.email}
              onChange={handleFormChange}
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="your.email@gmail.com"
              required
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <FaAt class="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">
            Card Holder
          </label>
          <div class="relative">
            <input
              type="text"
              id="card-holder"
              name="cardholder"
              value={checkOutForm?.cardholder}
              onChange={handleFormChange}
              class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your full name here"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <FaRegCreditCard class="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
            Card Details
          </label>
          <div class="flex">
            <div class="relative w-7/12 flex-shrink-0">
              <input
                type="text"
                id="card-no"
                name="carddetails.cardno"
                value={checkOutForm?.carddetails.cardno}
                onChange={handleFormChange}
                class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <FaCreditCard class="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <input
              type="text"
              name="carddetails.carddate"
              value={checkOutForm?.carddetails.carddate}
              onChange={handleFormChange}
              class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="MM/YY"
            />
            <input
              type="text"
              name="carddetails.cardcvv"
              value={checkOutForm?.carddetails.cardcvv}
              onChange={handleFormChange}
              class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="CVC"
            />
          </div>
          <label
            for="billing-address"
            class="mt-4 mb-2 block text-sm font-medium"
          >
            Billing Address
          </label>
          <div class="flex flex-col sm:flex-row">
            <div class="relative flex-shrink-0 sm:w-7/12">
              <input
                type="text"
                id="billing-address"
                name="billingdetails.address"
                value={checkOutForm?.billingdetails.address}
                onChange={handleFormChange}
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <FaGlobe class="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <select
              type="text"
              name="billingdetails.state"
              value={checkOutForm?.billingdetails.state}
              onChange={handleFormChange}
              class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="State">State</option>
            </select>
            <input
              type="text"
              name="billingdetails.zip"
              value={checkOutForm?.billingdetails.zip}
              onChange={handleFormChange}
              class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="ZIP"
            />
          </div>
          <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
          Place Order
        </button>
        </form>
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Subtotal</p>
            <p class="font-semibold text-gray-900">${calculateTotalPrice()}</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Shipping</p>
            <p class="font-semibold text-gray-900">$10.00</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">
            ${totalAfterShipping}
          </p>
        </div>

      
      </div>
      {setIsBillModalOpen && <OrderDetail/>}
    </>
  );
};
