import React from 'react';
import {
  FormSelect as BootstrapFormSelect,
  FormSelectProps as BootstrapFormSelectProps,
} from 'react-bootstrap';

export interface FormSelectProps extends BootstrapFormSelectProps {}

const FormSelect = ({ className, children, ...rest }: FormSelectProps) => {
  return (
    <BootstrapFormSelect className={className} {...rest}>
      {children}
    </BootstrapFormSelect>
  );
};

export default FormSelect;
