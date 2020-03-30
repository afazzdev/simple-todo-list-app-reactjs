import React from 'react';

const InputBase = ({ name, onChange, fullWidth, disabled, ...rest }) => {
  return (
    <input
      className={`input-base ${disabled && `input-disabled`}`}
      name={name}
      onChange={onChange}
      style={{ ...(fullWidth ? { width: '100%' } : {}) }}
      disabled={disabled}
      {...rest}
    />
  );
};

export default InputBase;
