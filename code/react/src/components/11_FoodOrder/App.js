import { useState } from "react";

import Cart from "./components/11_FoodOrder/Cart/Cart";
import Header from "./components/11_FoodOrder/Layout/Header";
import Meals from "./components/11_FoodOrder/Meals/Meals";
import CartProvider from "./store/11_FoodOrder/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}