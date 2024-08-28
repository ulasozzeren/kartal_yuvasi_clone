import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Header.css';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    { name: 'Ürün 1', price: 100, image: '/path-to-product1-image.png' },
    { name: 'Ürün 2', price: 150, image: '/path-to-product2-image.png' }
  ]); // Sepet örnek verileri

  const toggleCart = () => setShowCart(!showCart);

  return (
    <header className="header">
      <div className="logo">
        <img src="/kartal.jpg" alt="Kartal" />
      </div>
      <nav className="nav">
        <Link to="/">Anasayfa</Link>
        <Link to="/urunler">Ürünler</Link>
        <Link to="/iletisim">İletişim</Link>
        <div className="cart-container">
          <span className="cart-icon" onClick={toggleCart}>
            🛒 {/* Alışveriş sepeti emojisi */}
            {cartItems.length > 0 && (
              <div className="cart-quantity">{cartItems.length}</div>
            )}
          </span>
          {showCart && <Cart cartItems={cartItems} onClose={toggleCart} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
