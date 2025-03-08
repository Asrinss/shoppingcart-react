import React, { useContext, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { Product as ProductType } from "../../types/product";

interface ProductProps {
  data: ProductType;
}

const Product: React.FC<ProductProps> = memo(({ data }) => {
  const { id, productName, price, productImage } = data;
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  if (!context) return null;
  const { addToCart, cartItems } = context;

  const cartItemCount = cartItems[id];

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(id);
  };

  return (
    <div className="product" onClick={handleProductClick}>
      <img src={productImage} loading="lazy" alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button 
        className="addToCartBttn" 
        onClick={handleAddToCart}
      >
        Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
});

Product.displayName = 'Product';

export { Product }; 