import React from 'react';
import {
  FormCheck as BootstrapFormCheck,
  FormCheckProps as BootstrapFormCheckProps,
} from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormCheckProps extends BootstrapFormCheckProps {}

const FormCheck = ({ type, className, ...rest }: FormCheckProps) => {
  return <BootstrapFormCheck type={type} {...rest} className={className} />;
};

FormCheck.Feedback = Feedback;

export default FormCheck;
