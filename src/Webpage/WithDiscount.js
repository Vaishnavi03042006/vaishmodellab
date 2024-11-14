import React from 'react';

const withDiscount = (Component) => {
  return ({ products, discount }) => {
    const discountedProducts = products.map((product) => ({
      ...product,
      price: product.price - (product.price * discount) / 100,
    }));

    return <Component products={discountedProducts} />;
  };
};

export default withDiscount;
