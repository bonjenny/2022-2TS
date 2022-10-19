import { Fragment } from "react";

import Header from "./components/11_FoodOrder/Layout/Header";
import Meals from "./components/11_FoodOrder/Meals/Meals";
import Cart from "./components/11_FoodOrder/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
    </Fragment>
  );
}

export default App;
