import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = items => {};
  const removeItemToCartHandler = items => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: {addItemToCartHandler},
    removeItem: {removeItemToCartHandler}
  }
  return <CartContext>{props.children}</CartContext>;
};

export default CartProvider;
