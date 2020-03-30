import React from 'react';

const Card = ({ children, style, ...rest }) => {
  return (
    <div className='card-container' style={style} {...rest}>
      {children}
    </div>
  );
};

export default Card;
