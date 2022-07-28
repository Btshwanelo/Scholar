import React from "react";

const Modal = () => {
  return (
    <aside className="modal__container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn__container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
