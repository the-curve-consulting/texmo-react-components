import React from 'react';
import {
  FormLabelProps as BootstrapFormLabelProps,
  FormLabel as BootstrapFormLabel,
} from 'react-bootstrap';

type FormLabelProps = BootstrapFormLabelProps & {
  label: string;
};

const FormLabel = ({ label, className }: FormLabelProps) => {
  return (
    <BootstrapFormLabel className={className}>
      <small className="text-muted">{label}</small>
    </BootstrapFormLabel>
  );
};

export default FormLabel;
