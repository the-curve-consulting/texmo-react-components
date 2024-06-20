import classNames from 'classnames';
import React from 'react';
import { ButtonProps, Button } from 'react-bootstrap';

export interface SearchBarButtonProps extends ButtonProps {}

const SearchBarButton = ({ className, ...rest }: SearchBarButtonProps) => {
  return (
    <Button
      variant="light"
      className={classNames(className, 'input-group-button')}
      {...rest}
    >
      <i className="bi bi-search"></i>
    </Button>
  );
};

export default SearchBarButton;
