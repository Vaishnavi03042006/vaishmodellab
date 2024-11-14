import React from 'react';
import ProductList from './Webpage/ProductList';
import { productsData } from './Webpage/data';
import withProductTransformation from './Webpage/withProductTransformation';

const applyDiscount = (product) => ({
  ...product,
  price: product.price * 0.8, 
});

const applyTax = (product) => ({
  ...product,
  price: product.price * 1.1, 
});

const DiscountedProductList = withProductTransformation(ProductList, applyDiscount);
const TaxedProductList = withProductTransformation(ProductList, applyTax);

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>

      <h3>Original Prices</h3>
      <ProductList products={productsData} />

      <h3>Discounted Prices (20% Off)</h3>
      <DiscountedProductList products={productsData} />

      <h3>Prices with Tax (10% Added)</h3>
      <TaxedProductList products={productsData} />
    </div>
  );
};

export default App;
