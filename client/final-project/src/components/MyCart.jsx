import React from "react";
import { TbCurrencyShekel } from "react-icons/tb";
import { useCart } from "../context/CartContext"; // Adjust the import path as needed
import "../style/cart.css"; // Adjust the import path as needed

const MyCart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (e, productId) => {
    e.preventDefault();
    removeFromCart(productId);
    console.log(`Product removed from cart: ${productId}`);
  };

  return (
    <div className="cart">
      <div className="forms-container">
        <form className="MyCartForm">
          <h1>My Cart</h1>
          {cart.map((product) => (
            <div key={product.id} className="cartItem">
              <img
                src={product.productImage}
                alt={product.title}
                className="cartItemImage"
              />
              <div className="cartItemDetails">
                <h3>{product.title}</h3>
                <p>
                  Price: {product.productPrice} <TbCurrencyShekel />
                </p>
                <button onClick={(e) => handleRemoveFromCart(e, product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default MyCart;
