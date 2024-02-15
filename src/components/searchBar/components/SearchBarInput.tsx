import React from 'react';
import { FormControlProps, FormControl } from 'react-bootstrap';

export interface SearchBarInputProps extends FormControlProps {}

const SearchBarInput = ({ className, ...rest }: SearchBarInputProps) => {
  return (
    <div className="form-outline w-100">
      <FormControl className={`search-input ${className}`} {...rest} />
    </div>
  );
};

export default SearchBarInput;
