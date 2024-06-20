import classNames from 'classnames';
import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';

interface FilterButtonProps extends ButtonProps {
  filterExists: boolean;
}

const FilterButton = ({
  variant = 'secondary',
  filterExists,
  className,
  ...rest
}: FilterButtonProps) => {
  return (
    <Button
      variant={variant}
      className={classNames(className, 'position-relative ms-2')}
      {...rest}
    >
      <i className="bi bi-filter"></i>
      {filterExists ? (
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">Filter applied</span>
        </span>
      ) : null}
    </Button>
  );
};

export default FilterButton;
