import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import { FormLabelProps as BootstrapFormLabelProps } from 'react-bootstrap';

type FormLabelProps = BootstrapFormLabelProps & {
  label: string;
};

const FormLabel = ({ label, className }: FormLabelProps) => {
  return (
    <Bootstrap.Form.Label className={className}>
      <small className="text-muted">{label}</small>
    </Bootstrap.Form.Label>
  );
};

export default FormLabel;
