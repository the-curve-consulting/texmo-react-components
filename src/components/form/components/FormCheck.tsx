import React from 'react';
import {
  FormCheck as BootstrapFormCheck,
  FormCheckProps as BootstrapFormCheckProps,
} from 'react-bootstrap';

export interface FormCheckProps extends BootstrapFormCheckProps {}

const FormCheck = ({ type, className, ...rest }: FormCheckProps) => {
  return <BootstrapFormCheck type={type} {...rest} className={className} />;
};

export default FormCheck;
