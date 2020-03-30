import React from 'react';
import InputBase from './InputBase';

const TextField = ({
  name,
  endAdornment,
  disabled,
  InputProps,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div
      style={{
        alignSelf: 'flex-end',
        width: '100%',
        display: 'flex',
      }}
      {...rest}
    >
      <InputBase
        disabled={disabled}
        fullWidth
        value={value}
        onChange={onChange}
        {...InputProps}
      />
      {endAdornment}
    </div>
  );
};

export default TextField;
