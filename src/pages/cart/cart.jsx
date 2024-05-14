import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, buy } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBuy = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    buy();
    navigate("/buy");
    alert("Your purchase is completed successfully!");
  };

  return (
    <div className="cart">
      <div>
        <h1>Products</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total: ${totalAmount}</p>
          <div className="payment-methods">
            <h2>Choose Payment Method</h2>
            <div>
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="Credit Card"
                onChange={handlePaymentChange}
              />
              <label htmlFor="creditCard">Credit Card</label>
            </div>
            <div>
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="PayPal"
                onChange={handlePaymentChange}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
            <div>
              <input
                type="radio"
                id="bitcoin"
                name="paymentMethod"
                value="Bitcoin"
                onChange={handlePaymentChange}
              />
              <label htmlFor="bitcoin">Bitcoin</label>
            </div>
            <div>
              <input
                type="radio"
                id="Cash"
                name="paymentMethod"
                value="Cash on"
                onChange={handlePaymentChange}
              />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>

          </div>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={handleBuy}>Buy</button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
