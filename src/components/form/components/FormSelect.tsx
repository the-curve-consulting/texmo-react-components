import React from 'react';
import * as Bootstrap from 'react-bootstrap';

export interface FormSelectProps extends Bootstrap.FormSelectProps {}

const FormSelect = ({ className, children, ...rest }: FormSelectProps) => {
  return (
    <Bootstrap.Form.Select className={className} {...rest}>
      {children}
    </Bootstrap.Form.Select>
  );
};

export default FormSelect;
