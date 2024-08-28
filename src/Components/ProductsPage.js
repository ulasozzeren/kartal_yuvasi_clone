import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products'; // Ürün verilerini doğru yolda import edin
import './ProductsPage.css'; // Stil dosyasını ekleyin

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h2>Ürünler</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image} // Resim adı burada doğru olmalı
              description={product.description}
            />
          ))
        ) : (
          <p>Ürün bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
