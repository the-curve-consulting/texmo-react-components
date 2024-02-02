import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface FormCheckProps extends Bootstrap.FormCheckProps {}

const FormCheck = ({ type, className, ...rest }: FormCheckProps) => {
  return <Bootstrap.FormCheck type={type} {...rest} className={className} />;
};

export default FormCheck;
