import React from 'react';
import { FormGroupProps as BootstrapFormGroupProps } from 'react-bootstrap';
export interface FormGroupProps extends BootstrapFormGroupProps {
    label?: string;
}
declare const FormGroup: ({ label, className, children, ...rest }: FormGroupProps) => React.JSX.Element;
export default FormGroup;
//# sourceMappingURL=FormGroup.d.ts.map