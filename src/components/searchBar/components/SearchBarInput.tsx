import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface SearchBarInputProps extends Bootstrap.FormControlProps {}

const SearchBarInput = ({ className, ...rest }: SearchBarInputProps) => {
  return (
    <Bootstrap.Form.Control
      className={`search-input ${className}`}
      style={{ maxWidth: '300px' }}
      {...rest}
    />
  );
};

export default SearchBarInput;
