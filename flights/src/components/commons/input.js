import React from "react";
import PropTypes from "prop-types";
const input = ({ id, label, value, type, onChange, placeholder, error }) => {
  return (
    <div className="search-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ""}
      />
      {error && <span className="c-pink">{error}</span>}
    </div>
  );
};
input.propType = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};
input.defaultProps = {
  type: "text",
  placeholder: null,
  error: null,
};
export default input;
