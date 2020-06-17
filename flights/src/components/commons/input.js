import React from "react";
import PropTypes from "prop-types";
const input = ({ id, label, value, type, onChange, placeholder }) => {
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
  active_label: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};
input.defaultProps = {
  type: "text",
  placeholder: null,
};
export default input;
