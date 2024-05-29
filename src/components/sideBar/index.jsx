import React ,{useEffect, useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { FaCartPlus, FaGem, FaTshirt, FaCrown, FaBars, FaPlus } from "react-icons/fa" 
function SideBar() {
  const {getCategories,getCatogoryData,categories} = useContext(GlobalContext)
  useEffect(() => {
    getCategories();
 
  }, []);
 

   const handleGetData = (category) => {
    getCatogoryData(category);
  } 
  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "electronics":
        return <FaCartPlus />;
      case "jewelery":
        return <FaGem />;
      case "men's clothing":
        return <FaTshirt />;
      case "women's clothing":
        return <FaCrown />;
      case "settings":
        return <FaBars />;
      default:
        return <FaCartPlus />;
    }
  };

  return (
    <>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-60px)] w-full max-w-[300px] p-4 shadow-xl font-header-family">
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 font-header-family">
            Categories
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          {categories.map((item) => (
            <div
              key={item}
              role="button"
              tabIndex="0"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
            >
              <div className="grid place-items-center mr-4">
             
                {getCategoryIcon(item)}
              </div>
              <button onClick={() => handleGetData(item)}>{item}</button>
            </div>
          ))}
        
         
           
       
        </nav>
      </div>

    </>
  )
}

export default SideBar