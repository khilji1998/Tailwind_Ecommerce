import React from "react";
import { GlobalContext } from "../../context/globalState";
import { useContext } from "react";
const ProductCart = () => {
  const { open, setOpen, cartData, setcount, setCartData, count } =
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
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 overflow-hidden"
    
      >
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="w-[500px] p-2  flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <div className="ml-3 flex h-7 items-center">
                  <button onClick={handlecloseICon}>close</button>
                </div>
              </div>
              <div className="mt-8">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
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
                              <p className="ml-4">{item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500"></p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty</p>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                           
                                onClick={() => handleRemoveItem(item.id)} >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
