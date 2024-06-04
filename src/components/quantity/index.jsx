import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GlobalContext } from "../../context/globalState";
const Quantity = ({quantity , id}) => {
    const {
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      } = useContext(GlobalContext);
  return (
    <>
      <button  className="ml-3" onClick={() => handleDecreaseQuantity(id)}>
        <FaMinus />
      </button >
      <button className="ml-3 w-10 border border-black font-bold rounded-md ">
        {quantity}
      </button>
      <button  className="ml-3"  onClick={() => handleIncreaseQuantity(id)}>
        <FaPlus />
      </button>
    </>
  );
}

export default Quantity;
