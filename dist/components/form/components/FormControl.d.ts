import React from 'react';
import { FormControlProps as BootstrapFormControlProps } from 'react-bootstrap';
export interface FormControlProps extends BootstrapFormControlProps {
    placeholder?: string;
}
declare const FormControl: {
    ({ className, ...rest }: FormControlProps): React.JSX.Element;
    Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
};
export default FormControl;
//# sourceMappingURL=FormControl.d.ts.map