import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface SearchBarButtonProps extends Bootstrap.ButtonProps {}

const SearchBarButton = ({ className, ...rest }: SearchBarButtonProps) => {
  return (
    <Bootstrap.Button
      variant="light"
      className={`input-group-button ${className}`}
      {...rest}
    >
      <i className="bi bi-search"></i>
    </Bootstrap.Button>
  );
};

export default SearchBarButton;
