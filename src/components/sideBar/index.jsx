import React ,{useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../context/globalState";
import { FaCartPlus, FaGem, FaTshirt, FaCrown, FaBars} from "react-icons/fa" 
import {FaArrowLeft} from 'react-icons/fa'
function SideBar() {
  const {getCategories,getCatogoryData,categories} = useContext(GlobalContext)
  const [Open ,setOpen] = useState(true)
  useEffect(() => {
    getCategories();
 
  }, [getCategories]);
  
  useEffect(()=>{
    if(window.innerWidth < 992){
      setOpen(false)
    }else{
      setOpen(true)
    }
},[window.innerWidth])
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
        <div className={`fixed min-h-screen bg-clip-border rounded-sm bg-white text-gray-700 p-4 shadow-xl ${Open ? "w-72" : "w-20" } duration-300 relative `}>
          <FaArrowLeft className={`bg-gray-700 text-white text-2xl rounded-full absolute -right-1 top-4 border-white cursor-pointer ${!Open && "rotate-180"}`} onClick={()=>setOpen(!Open)}/>
        <div className="mb-2 p-4">
          <h5 className={`block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 font-header-family ${!Open && 'scale-0'}`} >
            Categories 
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          {categories.map((item) => (
            <div
              key={item}
              role="button"
              tabIndex="0"
              className={`flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all ${!Open ? 'hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none' : ' hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none'}`}
            >
             
             
                {getCategoryIcon(item)}
            
              <button className={`ml-2 ${!Open && 'scale-0 hover'}`} onClick={() => handleGetData(item)}>{item.charAt(0).toUpperCase()+item.slice(1)}</button>
            </div>
          ))}
        
         
           
       
        </nav>
      </div>

    </>
  )
}

export default SideBar