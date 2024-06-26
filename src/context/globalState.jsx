import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [billFormData, setBillFormData] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [getsingleproduct, setgetSingleproduct]= useState([]);
  const [loading ,setLoading]= useState(true);
  const [cartData, setCartData] = useState([]);
  const [open , setOpen] = useState(false);
  const [count, setcount]= useState(0);
  const [quantity, setQuantity] = useState({});
  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {

        setCategories(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const getCatogoryData = (category) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
        console.log('Electronics data:', res.data); 
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const getSingleProductData = (id)=> {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setgetSingleproduct(res.data);
        setLoading(false);
        console.log('Electronics data:', res.data); 
      })
      .catch(err => {
        setLoading(false);
      });
  };
  const handleIncreaseQuantity = (id) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };
  const handleDecreaseQuantity = (id) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };
  const Loading=()=>{
    return(
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
      <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
    )
  }
  const [isBillModalOpen, setIsBillModalOpen] = useState(false);

  const toggleModal = () => {
    setIsBillModalOpen(!isBillModalOpen);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const calculateTotalPrice = () =>{
    return cartData
      .reduce(
        (total, item) => total + item.price * quantity[item.id],
        0
      )
      .toFixed(2)}
  
  return (
    <GlobalContext.Provider value={{ products, categories, getCatogoryData, getProducts, getCategories, getSingleProductData, getsingleproduct, Loading , open ,setOpen,cartData,setCartData,count,setcount ,handleIncreaseQuantity , handleDecreaseQuantity , quantity , setQuantity , calculateTotalPrice,toggleModal,isBillModalOpen,setIsBillModalOpen,billFormData,setBillFormData}}>
      {loading ? Loading() : children}
    </GlobalContext.Provider>
  );
};