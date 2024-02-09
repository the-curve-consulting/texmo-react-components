import React from 'react';
import { FormControlProps, FormControl } from 'react-bootstrap';

export interface SearchBarInputProps extends FormControlProps {}

const SearchBarInput = ({ className, ...rest }: SearchBarInputProps) => {
  return (
    <FormControl
      className={`search-input ${className}`}
      style={{ maxWidth: '300px' }}
      {...rest}
    />
  );
};

export default SearchBarInput;
