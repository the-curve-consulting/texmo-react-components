import React from 'react';
export interface FormProps extends React.HTMLProps<HTMLFormElement> {
}
declare const Form: {
    ({ children, ...rest }: FormProps): React.JSX.Element;
    Group: ({ label, className, children, ...rest }: import("./FormGroup").FormGroupProps) => React.JSX.Element;
    Label: ({ label, className }: import("react-bootstrap").FormLabelProps & {
        label: string;
    }) => React.JSX.Element;
    Control: ({ className, ...rest }: import("./components/FormControl").FormControlProps) => React.JSX.Element;
    Select: ({ className, children, ...rest }: import("./components/FormSelect").FormSelectProps) => React.JSX.Element;
    Check: ({ type, className, ...rest }: import("./components/FormCheck").FormCheckProps) => React.JSX.Element;
    RichText: ({ style, ...rest }: import("./components/FormRichText").FormRichText) => React.JSX.Element;
    DateTime: ({ className, ...rest }: import("./components/FormDateTime").FormDateTimeProps) => React.JSX.Element;
};
export default Form;
//# sourceMappingURL=Form.d.ts.map