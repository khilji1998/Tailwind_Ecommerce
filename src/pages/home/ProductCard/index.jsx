import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayCard({ product }) {
  const navigate = useNavigate()
const handleSingleProduct = (id)=>{
  navigate(`/product/${id}`)
}
  return (
    <>
      <img
        className="object-cover w-full rounded-md h-72 xl:h-80 "
        src={product.image}
        alt={product.title}
        onClick={()=>handleSingleProduct(product.id)}
      />
      <div className="group relative">
        <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
          {product.title ? product.title.slice(0, 20) : ""}
        </h4>
      </div>
      <p className="text-blue-500">${product.price}</p>
    </>
  );
}

export default DisplayCard;
