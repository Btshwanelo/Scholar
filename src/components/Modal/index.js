import React from "react";
import styles from "./styles.module.css";

const Modal = () => {
  return (
    <aside className={styles.modal__container}>
      <div className={styles.modal}>
        <h4>Remove all items from your shopping cart?</h4>
        <div className={styles.btn__container}>
          <button
            type="button"
            className={`${styles.btn}  ${styles.confirm__btn}`}
            onClick={() => {}}
          >
            confirm
          </button>
          <button
            type="button"
            className={`${btn} ${clear__btn}`}
            onClick={() => {}}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
