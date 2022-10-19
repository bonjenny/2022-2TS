import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./CSS/Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={`${classes.modal} ${props.className}`}>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          // onClose={props.onClose}
        >
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
