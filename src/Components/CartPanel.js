import React from 'react';
import { useCart } from '../CartContext';
import './CartPanel.css'; // Panel stilini tanımlayın

const CartPanel = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-panel">
      <h2>Sepet</h2>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Fiyat: {item.price}₺</p>
                  <p>Miktar: {item.quantity}</p>
                  <button onClick={() => handleRemove(item.id)}>Kaldır</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Toplam: {getTotalPrice()}₺</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPanel;
