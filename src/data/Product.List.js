// ProductList.js
import React from 'react';
import products from './products';

const ProductList = () => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {product.image ? (
            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
          ) : (
            <div style={{ width: '100px', height: '100px', backgroundColor: '#f0f0f0' }}>Resim Yok</div>
          )}
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
