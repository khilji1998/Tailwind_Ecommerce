
import { useContext } from "react";
import DisplayCard from "../ProductCard";
import { GlobalContext } from "../../../context/globalState";

function Products() {
    const {products} = useContext(GlobalContext)

  return (
    <>
        <div className="flex flex-wrap gap-8 justify-center my-4 mx-4 ">
          {products?.map((product) => (
            <>
              <div
                key={product.id}
                className="px-[8px] my-4 w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/5 hover:scale-110 transition duration-300"
            
              >
                <DisplayCard product={product} />
              </div>
            </>
          ))}
        </div>
  
    </>
  );
}

export default Products;
