import React from "react";

const TextFieldGroup = ({ label, type, id, placeholder, error, touched, fieldprops }) => {
  return (
    <div className="form__group">
      <label className="form__group__label" htmlFor="email">
        {label}
      </label>
      <input
        className="form__group__input"
        type={type}
        id={id}
        placeholder={placeholder}
        {...fieldprops}
      />
      {touched && error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default TextFieldGroup;
