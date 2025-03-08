import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Shopping Cart</h3>
          <p>The easiest way to shop online.</p>
        </div>
        <div className="footer-section">
          <h3>Link</h3>
          <ul>
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Communication</h3>
          <p>Email: support@shoppingcart.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shopping Cart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;