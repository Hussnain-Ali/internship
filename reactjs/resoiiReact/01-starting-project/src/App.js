import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);

  }
  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCartHandler={hideCartHandler} />}
      <h2>Let's get started!</h2>
      <Header
        onShowCartHandler={showCartHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
