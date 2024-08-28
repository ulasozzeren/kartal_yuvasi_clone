import React from 'react';
import { useCart } from '../CartContext'; // doğru yolu kontrol edin
import './CartDropdown.css';

const CartDropdown = () => {
  const { cartItems, removeFromCart } = useCart(); // useCart'i kullanın

  return (
    <div className="cart-dropdown">
      <div className="cart-header">
        <h2>Sepetiniz</h2>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Sepetiniz boş.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">{item.price} TL</p>
                <p className="cart-item-size">Beden: {item.size}</p>
                <button onClick={() => removeFromCart(item.id)}>Kaldır</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
