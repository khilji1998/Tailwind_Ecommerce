import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GlobalContext } from "../../context/globalState";
const Quantity = ({id}) => {
    const {
        quantity,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      } = useContext(GlobalContext);
      const currentQuanity = quantity[id] || 0;
  return (
    <>
      <button  className="ml-3" onClick={() => handleDecreaseQuantity(id)}>
        <FaMinus />
      </button >
      <button className="ml-3 w-10 border border-black font-bold rounded-md ">
        {currentQuanity}
      </button>
      <button  className="ml-3"  onClick={() => handleIncreaseQuantity(id)}>
        <FaPlus />
      </button>
    </>
  );
}

export default Quantity;
