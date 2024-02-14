import React from 'react';
import { FormLabelProps as BootstrapFormLabelProps } from 'react-bootstrap';
export type FormLabelProps = BootstrapFormLabelProps & {
    label?: string;
};
declare const FormLabel: ({ label, children, className }: FormLabelProps) => React.JSX.Element;
export default FormLabel;
//# sourceMappingURL=FormLabel.d.ts.map