import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
function Header() {
  const { count, open, setOpen } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleLogout = () =>{
     localStorage.removeItem("loggedin");
     navigate('/signin');
  }
  return (
    <>
      <header class="bg-black lg:px-16  px-4 flex text-white flex-wrap items-center py-4 shadow-md">
        <div class="flex-1 flex justify-between items-center">
          <a href="#" class="text-xl font-bold">
            FashVibe
          </a>
        </div>

        <div
          class="hidden md:flex md:items-center md:w-auto  w-full "
          id="menu"
        >
          <nav>
            <ul class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
              <li>
                <Link class="md:p-4 py-3 px-0 block" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link class="md:p-4 py-3 px-0 block md:mb-0 mb-2" to="contact">
                  Contact Us
                </Link>
              </li>
              <li className="flex justify-center items-center">
                <Link className="flex items-center p-4" to="#">
                  <FaShoppingCart
                    className="w-[30px] h-[35px]"
                    onClick={() => setOpen(!open)}
                  />
                  <div className="flex flex-col items-center">
                    <span className="bg-white text-black w-7 rounded-md text-center ml-1">
                      {count}
                    </span>
                    <b className="ml-1">Cart</b>
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex justify-center items-center ">
                  <FaUser className="w-[20px] h-[35px]" />{" "}
                  <span className=" ml-2 font-medium text-[18px]" onClick={handleLogout}>Logout</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
