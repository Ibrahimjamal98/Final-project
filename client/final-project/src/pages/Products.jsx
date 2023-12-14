import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCart from "../components/MyCart";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = "http://localhost:5000/products"; // Replace with your actual API endpoint

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setProducts(response.data.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Product added to cart: ${product._id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          {product.productImage && (
            <img
              src={product.productImage}
              alt={product.title}
              style={{ width: "200px", height: "200px" }}
            />
          )}
          <p>{product.description}</p>
          <p>Price: {product.productPrice}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
