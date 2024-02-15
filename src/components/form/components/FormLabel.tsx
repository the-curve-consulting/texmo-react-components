import React from 'react';
import {
  FormLabelProps as BootstrapFormLabelProps,
  FormLabel as BootstrapFormLabel,
} from 'react-bootstrap';

export type FormLabelProps = BootstrapFormLabelProps & {
  label?: string;
};

const FormLabel = ({ label, children, className }: FormLabelProps) => {
  return (
    <BootstrapFormLabel className={className}>
      {label ? <small className="text-muted">{label}</small> : null}
      {children}
    </BootstrapFormLabel>
  );
};

export default FormLabel;
