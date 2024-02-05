import React from 'react';
interface FormProps extends React.HTMLProps<HTMLFormElement> {
}
declare class Form extends React.PureComponent<FormProps> {
    static Group: ({ label, className, children, ...rest }: import("./FormGroup").FormGroupProps) => React.JSX.Element;
    static Label: ({ label, className }: import("react-bootstrap").FormLabelProps & {
        label: string;
    }) => React.JSX.Element;
    static Control: ({ className, ...rest }: import("./components/FormControl").FormControlProps) => React.JSX.Element;
    static Select: ({ className, children, ...rest }: import("./components/FormSelect").FormSelectProps) => React.JSX.Element;
    static Check: ({ type, className, ...rest }: import("./components/FormCheck").FormCheckProps) => React.JSX.Element;
    static RichText: ({ style, ...rest }: import("./components/FormRichText").FormRichText) => React.JSX.Element;
    static DateTime: ({ ...rest }: import("./components/FormDateTime").FormDateTime) => React.JSX.Element;
    render(): React.JSX.Element;
}
export default Form;
//# sourceMappingURL=Form.d.ts.map