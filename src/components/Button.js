import React from 'react';

const Button = ({ children, type, color, onClick, ...rest }) => {
  return (
    <button
      className='button-base'
      type={type}
      style={{ backgroundColor: color }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
