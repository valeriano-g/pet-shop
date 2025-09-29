
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={product.image} className="card-img-top shop-img" alt={product.name} />
        <div className="card-body">
          <hr />
          <h5 className="card-title fw-lighter">{product.name}</h5>
          <p className="card-text fw-semibold">${product.price}</p>
          <div className="bottom-shop" onClick={() => addToCart(product)}><i className="bi bi-cart-plus-fill"></i></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
