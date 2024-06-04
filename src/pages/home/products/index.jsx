import { useContext } from "react";
import DisplayCard from "../ProductCard";
import { GlobalContext } from "../../../context/globalState";
import ProductCart from "../../productCart";

function Products() {
  const { products ,open} = useContext(GlobalContext);

  return (
    <>
      <div className="flex flex-wrap gap-8  my-4 mx-4 ">
        {products?.map((product) => (
          <>
            <div
              key={product.id}
              className="px-[8px] my-4 w-full sm:w-full md:w-1/3 lg:w-[25%] xl:w-[23%] hover:scale-110 transition duration-300"
            >
              <DisplayCard product={product} />
            </div>
          </>
        ))}
      </div>
      {open && <ProductCart/>}
    </>
  );
}

export default Products;
