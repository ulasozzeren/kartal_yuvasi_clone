import React, { useState } from 'react';
import { useCart } from '../CartContext';
import './ProductDetailPage.css';

function ProductDetailPage({ product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize, quantity });
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>

        <div className="size-selector">
          <span>Beden:</span>
          <div className="size-options">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-selector">
          <span>Adet:</span>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <p className="product-price">{product.price} TL</p>

        <button
          className="add-to-cart-button"
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
