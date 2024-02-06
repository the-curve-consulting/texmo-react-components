import React from 'react';
import {
  FormControl as BootstrapFormControl,
  FormControlProps as BootstrapFormControlProps,
} from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormControlProps extends BootstrapFormControlProps {
  placeholder?: string;
}

const FormControl = ({ className, ...rest }: FormControlProps) => {
  return <BootstrapFormControl as="input" className={className} {...rest} />;
};

FormControl.Feedback = Feedback;

export default FormControl;
