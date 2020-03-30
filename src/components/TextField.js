import React from 'react';

const TextField = ({ name, onChange, ...rest }) => {
  return (
    <input className='input-base' name={name} onChange={onChange} {...rest} />
  );
};

export default TextField;
