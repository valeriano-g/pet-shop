
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <hr />
          <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
