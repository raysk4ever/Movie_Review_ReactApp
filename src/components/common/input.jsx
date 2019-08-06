import React from "react";

const Input = props => {
  const { value, onChange, name, label, autoFocus, error, type } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      />
      {error && <div className="alert alert-danger m-2">{error}</div>}
    </div>
  );
};

export default Input;
