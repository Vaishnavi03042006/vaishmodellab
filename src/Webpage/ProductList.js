import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '150px' }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
