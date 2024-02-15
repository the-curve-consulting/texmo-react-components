import React from 'react';
import {
  FormSelect as BootstrapFormSelect,
  FormSelectProps as BootstrapFormSelectProps,
} from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';

export interface FormSelectProps extends BootstrapFormSelectProps {}

const FormSelect = ({ className, children, ...rest }: FormSelectProps) => {
  return (
    <BootstrapFormSelect className={className} {...rest}>
      {children}
    </BootstrapFormSelect>
  );
};

FormSelect.Feedback = Feedback;

export default FormSelect;
