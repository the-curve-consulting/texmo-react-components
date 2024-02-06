import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import { FormLabelProps as BootstrapFormLabelProps } from 'react-bootstrap';

type FormLabelProps = BootstrapFormLabelProps & {
  label: string;
};

const FormLabel = ({ label, className }: FormLabelProps) => {
  return (
    <Bootstrap.Form.Label className={className}>{label}</Bootstrap.Form.Label>
  );
};

export default FormLabel;
