import React from "react";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal__background" onClick={props.onClose}>
      <section className="modal">
        <header>{props.header}</header>
        <main>{props.children}</main>
        <footer>
          <Button onClick={props.onClose}>
            Okay
          </Button>
        </footer>
      </section>
    </div>
  );
};
export default Modal;
