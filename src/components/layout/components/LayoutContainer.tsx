import classNames from 'classnames';
import React from 'react';
import { Container, ContainerProps } from 'react-bootstrap';

export interface LayoutContainerProps extends ContainerProps {}

const LayoutContainer = ({
  className,
  children,
  ...rest
}: LayoutContainerProps) => {
  return (
    <Container
      fluid
      className={classNames(
        'd-flex flex-column px-0 layout-container',
        className,
        'col'
      )}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default LayoutContainer;
