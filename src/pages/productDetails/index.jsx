import React from "react";
import { GlobalContext } from "../../context/globalState";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {FaArrowLeft , FaArrowRight } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
function ProductDetails() {
    const navigate = useNavigate();
  const { id } = useParams();
  const { getSingleProductData, getsingleproduct,Loading , products } =
    useContext(GlobalContext);
  useEffect(() => {
    getSingleProductData(id);
  }, [id]);
    const HandleNextId = () => {
        const newId = parseInt(id) < products.length ? parseInt(id) + 1 : id; 
        navigate(`/product/${newId}`); 
      };

 const HandlePrevId = () => {
    const prevId = parseInt(id) > 1 ?  parseInt(id) - 1 : id; 
        navigate(`/product/${prevId}`); 
      
 }
  return (
    <>
    <div className="flex justify-around mt-2 text-3xl">
    <FaArrowLeft onClick={HandlePrevId} />
    <FaArrowRight onClick={HandleNextId}/> 
    </div>

      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={getsingleproduct.image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
             
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {getsingleproduct.title}
              </h1>
              <div class="flex mb-4">
               <span class="flex items-center">
                  <span class="text-gray-600 ml-3"><strong>Average Rating: {getsingleproduct?.rating?.rate} </strong></span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                 <span>
                 <strong>Total Reviews: {getsingleproduct?.rating?.count}</strong>
                 </span>
                </span>
              </div>
              <p class="leading-relaxed">
               {getsingleproduct.description}
              </p>
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
                <span class="title-font font-medium text-2xl text-gray-900">
                {getsingleproduct.price}$
                </span>
                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
