import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div className="categories">
      <h2>Kategoriler</h2>
      <div className="category-list">
        <div className="category-item">Formalar</div>
        <div className="category-item">Tişörtler</div>
        <div className="category-item">Aksesuarlar</div>
      </div>
    </div>
  );
}

export default Categories;
