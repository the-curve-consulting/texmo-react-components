import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import FormLabel from './components/FormLabel';

export interface FormGroupProps extends Bootstrap.FormGroupProps {
  label?: string;
}

const FormGroup = ({ label, className, children, ...rest }: FormGroupProps) => {
  return (
    <Bootstrap.Form.Group className={className} {...rest}>
      {label ? <FormLabel label={label} /> : null}
      {children}
    </Bootstrap.Form.Group>
  );
};

export default FormGroup;
