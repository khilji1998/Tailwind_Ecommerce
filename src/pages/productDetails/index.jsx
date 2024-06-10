import React, { useState } from "react";
import { GlobalContext } from "../../context/globalState";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductCart from "./productCart";
import Quantity from "../../components/quantity";
function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recordItem, setRecordItem] = useState([]);
  const {
    getSingleProductData,
    getsingleproduct,
    Loading,
    open,
    setOpen,
    cartData,
    setCartData,
    count,
    setcount,
    quantity,
    setQuantity,
  } = useContext(GlobalContext);
  useEffect(() => {
    getSingleProductData(id);
  }, [id]);
  const HandleNextId = () => {
    const newId = parseInt(id) < 20 ? parseInt(id) + 1 : id;
    navigate(`/product/${newId}`);
  };

  const HandlePrevId = () => {
    const prevId = parseInt(id) > 1 ? parseInt(id) - 1 : id;
    navigate(`/product/${prevId}`);
  };
  const handlecartdata = (id) => {
    if (recordItem.includes(id)) {
      return;
    }
    setcount((prev) => prev + 1);
    setCartData([...cartData, getsingleproduct]);
    setRecordItem((prev) => [...prev, id]);
    if(quantity >= 1)
      {
        setQuantity((prevQuantities) => ({
          ...prevQuantities,
          [id]: (prevQuantities[id] || 0),
        }));
      }
      else{
        setQuantity((prevQuantities) => ({
          ...prevQuantities,
          [id]: (prevQuantities[id] || 0 + 1),
        }));
      }
      setOpen(true)
  };
  const currentQuanity = quantity[id] || 0;
  return (
    <>
      <div className="flex justify-around mt-2 text-3xl">
        <FaArrowLeft onClick={HandlePrevId} />
        <FaArrowRight onClick={HandleNextId} />
      </div>

      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center"
              src={getsingleproduct.image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6  mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {getsingleproduct.title}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <span class="text-gray-600 ml-3">
                    <strong>
                      Average Rating: {getsingleproduct?.rating?.rate}{" "}
                    </strong>
                  </span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <span>
                    <strong>
                      Total Reviews: {getsingleproduct?.rating?.count}
                    </strong>
                  </span>
                </span>
              </div>
              <p class="leading-relaxed">{getsingleproduct.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div class="flex">
                  <h3>{getsingleproduct.category}</h3>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900 mr-3">
                  {getsingleproduct.price}$
                </span>
                <div className="flex rounded-[20px]  bg-gray-800 mr-3 ">
                  <button className=" w-[250px] flex items-center justify-center rounded-md px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800  hover:bg-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className={`mx-1`} onClick={() => handlecartdata(id)}>
                      {recordItem.includes(id) ? `Added` : "Add to cart"}
                    </span>
                  </button>
                </div>
                 <Quantity  id={id}/>
              </div>
            </div>
          </div>
        </div>
        {open && <ProductCart quantity={currentQuanity} id={id} />}
      </section>
    </>
  );
}

export default ProductDetails;
