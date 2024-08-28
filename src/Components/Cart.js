import React from 'react';
import './Cart.css';

function Cart({ cartItems, onClose }) {
  return (
    <div className="cart-dropdown">
      <button className="close-btn" onClick={onClose}>×</button>
      <h3>Sepetiniz</h3>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" /> {/* Ürün fotoğrafı */}
              <div className="cart-item-info">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
