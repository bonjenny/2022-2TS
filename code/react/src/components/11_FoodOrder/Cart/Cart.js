import classes from "./CSS/Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const DUMMY_CARTS = [
  {
    id: "c1",
    name: "Sushi",
    amount: 2,
    price: 12.99,
  },
  {
    id: "c2",
    name: "Schnitzel",
    amount: 1,
    price: 16.5,
  },
];

const Cart = (props) => {

  const cartsList = DUMMY_CARTS.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      // onRemove={}
      // onAdd={}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cartsList}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
