import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
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
          <p>Created At: {product.createdAt}</p>
          <p>Updated At: {product.updatedAt}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Products;
