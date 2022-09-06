import React from "react";

import PropTypes from "prop-types";

import "./style.css";

const TextFieldGroup = ({
  label,
  type,
  id,
  placeholder,
  error,
  touched,
  fieldprops,
}) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor="email">
        {label}
      </label>
      <input
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
        {...fieldprops}
      />
      {touched && error ? <div className="error">{error}</div> : null}
    </div>
  );
};

TextFieldGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  fieldprops: PropTypes.object,
};

export default TextFieldGroup;
