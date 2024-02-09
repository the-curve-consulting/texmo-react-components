import React from 'react';
import {
  FormControl as BootstrapFormControl,
  FormControlProps as BootstrapFormControlProps,
} from 'react-bootstrap';

export interface FormControlProps extends BootstrapFormControlProps {}

const FormControl = ({ className, ...rest }: FormControlProps) => {
  return <BootstrapFormControl as="input" className={className} {...rest} />;
};

export default FormControl;
