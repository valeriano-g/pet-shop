
import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-1">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
