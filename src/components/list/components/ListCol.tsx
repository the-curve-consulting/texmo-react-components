import classNames from 'classnames';
import React from 'react';
import { ColProps, Col } from 'react-bootstrap';

export interface ListColProps extends ColProps {}

const ListCol = ({ className, children, ...rest }: ListColProps) => {
  return (
    <Col className={classNames(className, 'px-0 overflow-hidden')} {...rest}>
      {children}
    </Col>
  );
};

export default ListCol;
