import React from "react";
import { GlobalContext } from "../../context/globalState";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Quantity from "../../components/quantity";
import { FaCircleRight } from "react-icons/fa6";

const ProductCart = () => {
  const { setOpen, cartData, setcount, setCartData, quantity } =
    useContext(GlobalContext);
  const handlecloseICon = () => {
    setOpen(false);
  };
  const handleRemoveItem = (id) => {
    setcount((prev) => prev - 1);
    setCartData(cartData.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 ">
        <div className="absolute right-0 h-screen flex flex-col justify-between w-[500px] px-4 py-6 bg-white shadow-xl">
       
          <div className="min-h-[300px] max-h-[650px] mt-2 overflow-auto">
          <button 
            className="ml-3 flex h-7 items-center"
            onClick={handlecloseICon}
          >
            <FaTimes />
          </button>
            <ul>
              {cartData
                .reduce((acc, item) => {
                  if (
                    !acc.find((existingItem) => existingItem.id === item.id)
                  ) {
                    acc.push(item);
                  }
                  return acc;
                }, [])
                .map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.image}>{item.title}</a>
                          </h3>
                          <p className="ml-4">
                            {item.price * quantity[item.id]}$
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500"></p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">
                          <p className="text-gray-500 font-bold mr-2">
                            Qty {quantity[item.id]}
                          </p>
                          <Quantity quantity={quantity} id={item.id} />
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="relative  bg-white">
            <p className="w-full absolute bottom-[50px] left-2 font-bold text-2xl text-black">
              Total:{" "}
              <span className="text-black float-right">
                {cartData
                  .reduce(
                    (total, item) => total + item.price * quantity[item.id],
                    0
                  )
                  .toFixed(2)}
                $
              </span>
            </p>
            <button className="absolute bottom-0 left-2 flex justify-center items-center w-full font-bold text-center text-white rounded-md px-2 py-2 duration-200 bg-gray-800 hover:bg-gray-700">
            Checking Out <FaCircleRight className="ms-2" />
          </button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default ProductCart;
