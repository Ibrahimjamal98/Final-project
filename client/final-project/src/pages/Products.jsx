// Products.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCart from "../components/MyCart";
import { useCart } from "../context/CartContext";
import "../style/Products.css";

const Products = ({ role }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [selectedProductType, setSelectedProductType] = useState(""); // New state for selected product type

  const baseURL = "http://localhost:5000/products";

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

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedProductType(event.target.value);
  };

  const filteredProducts = selectedProductType
    ? products.filter((product) => product.productType === selectedProductType)
    : products;

  const sortedProducts = [...filteredProducts];

  if (sortOption === "priceHighToLow") {
    sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
  } else if (sortOption === "priceLowToHigh") {
    sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
  }

  return (
    <div className="container">
      <div className="filter-container">
        <label htmlFor="type">Filter by Type:</label>
        <select
          id="type"
          value={selectedProductType}
          onChange={handleTypeChange}
        >
          <option value="">-- Select Type --</option>
          <option value="Motherboard">Motherboard</option>
          <option value="Graphic Card">Graphics Card</option>
        </select>
      </div>
      <div className="sort-container">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">-- Select --</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
        </select>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && (
        <div className="products-container">
          {sortedProducts.map((product) => (
            <div key={product._id} className="product-item">
              {product.productImage && (
                <img
                  src={product.productImage}
                  alt={product.title}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              <p>{product.title}</p>
              <p>Price: {product.productPrice}$</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {role === "admin" && (
        <div className="crud-options">
          <button>Create</button>
          <button>Read</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Products;
