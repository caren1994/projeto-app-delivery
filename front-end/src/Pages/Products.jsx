import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarProducts from '../Components/NavBarProducts';
import ProductCard from '../Components/ProductCard';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/products', { });
      console.log(data);
      setProducts(data.products);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBarProducts />
      <h1>produtos</h1>
      <div className="products">

        { products.map((product) => (
          <ProductCard product={ product } key={ product.id } />
        )) }
      </div>
    </>

  );
}
export default Products;
