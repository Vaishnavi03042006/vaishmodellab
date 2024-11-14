import React from 'react';

const withProductTransformation = (Component, transformFn) => {
  return ({ products }) => {
    const transformedProducts = products.map(transformFn);
    return <Component products={transformedProducts} />;
  };
};

export default withProductTransformation;
