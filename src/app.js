
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import productsData from './products';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="container-fluid">
      <Header toggleCart={toggleCart} />
      <main>
        <ProductList products={productsData} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} isCartOpen={isCartOpen} />
      </main>
    </div>
  );
};

export default App;
