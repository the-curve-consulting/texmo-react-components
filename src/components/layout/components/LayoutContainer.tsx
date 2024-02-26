import React from 'react';
import { Container, ContainerProps } from 'react-bootstrap';

export interface LayoutContainerProps extends ContainerProps {}

const LayoutContainer = ({
  className,
  children,
  style,
  ...rest
}: LayoutContainerProps) => {
  return (
    <Container
      fluid
      className={`${className} layout-container d-flex flex-column px-0`}
      style={{ ...style, minHeight: '100vh' }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default LayoutContainer;
