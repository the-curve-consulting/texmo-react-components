import React from 'react';
import { FormProps as BootstrapFormProps } from 'react-bootstrap';
export interface FormProps extends BootstrapFormProps {
}
declare const Form: {
    ({ children, ...rest }: FormProps): React.JSX.Element;
    Group: ({ label, className, children, ...rest }: import("./FormGroup").FormGroupProps) => React.JSX.Element;
    Label: ({ label, children, className }: import("./components/FormLabel").FormLabelProps) => React.JSX.Element;
    Control: {
        ({ className, ...rest }: import("./components/FormControl").FormControlProps): React.JSX.Element;
        Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    };
    Select: {
        ({ className, children, ...rest }: import("./components/FormSelect").FormSelectProps): React.JSX.Element;
        Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    };
    Check: {
        ({ type, className, ...rest }: import("./components/FormCheck").FormCheckProps): React.JSX.Element;
        Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    };
    RichText: ({ modules, value, onChange, theme, importCallback, debug, ...rest }: import("./components/FormRichText").QuillEditorProps) => React.JSX.Element;
    DateTime: {
        ({ className, ...rest }: import("./components/FormDateTime").FormDateTimeProps): React.JSX.Element;
        Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    };
    Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    Text: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"small", import("react-bootstrap").FormTextProps>;
    Typeahead: {
        ({ ...rest }: import("./components/FormTypeahead").FormSearchSelectProps): React.JSX.Element;
        Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    };
    AsyncTypeahead: {
        ({ ...rest }: import("./components/FormAsyncTypeahead").FormSearchSelectProps): React.JSX.Element;
        Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
    };
};
export default Form;
//# sourceMappingURL=Form.d.ts.map