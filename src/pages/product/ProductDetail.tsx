import React, { useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import './ProductDetail.css';

type RouteParams = {
  id?: string;
}

export const ProductDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(ShopContext);

  const product = useMemo(() => 
    PRODUCTS.find(p => p.id === Number(id)),
    [id]
  );

  if (!product) {
    return <div className="product-detail-error">Product not found</div>;
  }

  const cartItemCount = cartItems[product.id];

  return (
    <div className="product-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Shop
      </button>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.productImage} alt={product.productName} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.productName}</h1>
          <p className="price">${product.price}</p>
          
          <div className="product-description">
            <h2>Product Description</h2>
            <p>Experience the latest technology with the {product.productName}. 
            This premium product offers exceptional quality and performance.</p>
          </div>
          
          <div className="product-specs">
            <h2>Specifications</h2>
            <ul>
              <li>Brand: Premium Tech</li>
              <li>Model: {product.productName}</li>
              <li>Warranty: 1 Year</li>
              <li>In Stock: Yes</li>
            </ul>
          </div>
          
          <button 
            className="add-to-cart-button" 
            onClick={() => addToCart(product.id)}
          >
            Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </button>
        </div>
      </div>
    </div>
  );
}; 