import classNames from 'classnames';
import React from 'react';
import { FormControlProps, FormControl } from 'react-bootstrap';

export interface SearchBarInputProps extends FormControlProps {}

const SearchBarInput = ({ className, ...rest }: SearchBarInputProps) => {
  return (
    <div className="form-outline w-100">
      <FormControl
        className={classNames(className, 'search-input')}
        {...rest}
      />
    </div>
  );
};

export default SearchBarInput;
