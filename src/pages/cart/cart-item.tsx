import React, { useContext, memo, useCallback } from "react";
import { ShopContext } from "../../context/shop-context";
import { Product } from "../../types/product";

interface CartItemProps {
  data: Product;
}

export const CartItem: React.FC<CartItemProps> = memo(({ data }) => {
  const { id, productName, price, productImage } = data;
  const context = useContext(ShopContext);

  const handleQuantityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!context) return;
    const newAmount = Number(e.target.value);
    if (newAmount >= 0) {
      context.updateCartItemCount(newAmount, id);
    }
  }, [id, context]);

  if (!context) return null;
  const { cartItems, addToCart, removeFromCart } = context;

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} loading="lazy" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={handleQuantityChange}
            type="number"
            min="0"
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}); 