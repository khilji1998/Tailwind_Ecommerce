
import { useContext } from "react";
import DisplayProduct from "../displayProduct";
import { GlobalContext } from "../../../context/globalState";
function Products() {
    const {products} = useContext(GlobalContext)
  return (
    <>
        <div className="flex flex-wrap lg:w-4/5">
          {products?.map((product, index) => (
            <>
              <div
                key={index}
                className="px-[8px] w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/4 shover:scale-110 transition duration-300"
              >
                <DisplayProduct product={product} />
              </div>
            </>
          ))}
        </div>
  
    </>
  );
}

export default Products;
