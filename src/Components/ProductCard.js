import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, name, price, image, description }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/urunler/${id}`); // ID'yi URL'e parametre olarak geçin
  };

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={image} alt={name} className="product-image" /> {/* Fotoğrafı göster */}
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price} TL</p>
      </div>
      <button
        className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
        onClick={handleFavoriteClick}
      >
        <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
      </button>
    </div>
  );
};

export default ProductCard;
