import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar: React.FC = () => {
  const context = useContext(ShopContext);

  const cartItemCount = context ? Object.values(context.cartItems).reduce((a, b) => a + b, 0) : 0;

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}; 