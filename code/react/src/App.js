import { Fragment } from "react";

import Header from "./components/11_FoodOrder/Layout/Header";
import Meals from "./components/11_FoodOrder/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
