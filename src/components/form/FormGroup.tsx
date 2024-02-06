import React from 'react';
import FormLabel from './components/FormLabel';
import {
  FormGroup as BootstrapFormGroup,
  FormGroupProps as BootstrapFormGroupProps,
} from 'react-bootstrap';

export interface FormGroupProps extends BootstrapFormGroupProps {
  label?: string;
}

const FormGroup = ({ label, className, children, ...rest }: FormGroupProps) => {
  return (
    <BootstrapFormGroup className={className} {...rest}>
      {label ? <FormLabel label={label} /> : null}
      {children}
    </BootstrapFormGroup>
  );
};

export default FormGroup;
