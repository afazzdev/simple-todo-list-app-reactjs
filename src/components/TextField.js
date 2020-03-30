import React from 'react';
import InputBase from './InputBase';

const TextField = ({
  name,
  endAdornment,
  disabled,
  InputProps,
  value,
  onChange,
  style,
  ...rest
}) => {
  return (
    <div
      style={{
        alignSelf: 'flex-end',
        width: '100%',
        display: 'flex',
        ...style
      }}
      {...rest}
    >
      <InputBase
        disabled={disabled}
        fullWidth
        value={value}
        onChange={onChange}
        name={name}
        {...InputProps}
      />
      {endAdornment}
    </div>
  );
};

export default TextField;
