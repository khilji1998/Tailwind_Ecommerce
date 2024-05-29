import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [getsingleproduct, setgetSingleproduct]= useState(null)
  const [loading ,setLoading]= useState(true)
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <GlobalContext.Provider value={{ products, categories, getCatogoryData, getProducts, getCategories, getSingleProductData, getsingleproduct, Loading}}>
      {loading ? Loading() : children}
    </GlobalContext.Provider>
  );
};