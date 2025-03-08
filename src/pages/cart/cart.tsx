import React, { useState, useContext, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart: React.FC = () => {
  const context = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const navigate = useNavigate();

  const handlePaymentChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  }, []);

  const handleBuy = useCallback(() => {
    if (!context) return;
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    context.buy();
    navigate("/");
    alert("Your purchase is completed successfully!");
  }, [paymentMethod, context, navigate]);

  const totalAmount = useMemo(() => {
    if (!context) return 0;
    return context.getTotalCartAmount();
  }, [context]);

  const cartProducts = useMemo(() => {
    if (!context) return [];
    return PRODUCTS.filter(product => context.cartItems[product.id] !== 0);
  }, [context]);

  if (!context) return null;

  if (cartProducts.length === 0) {
    return <h1 className="cart-empty">Your Shopping Cart is Empty</h1>;
  }

  return (
    <div className="cart">
      <div>
        <h1>Products</h1>
      </div>
      <div className="cart-items">
        {cartProducts.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>

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
              id="cash"
              name="paymentMethod"
              value="Cash on Delivery"
              onChange={handlePaymentChange}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
        </div>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
}; 