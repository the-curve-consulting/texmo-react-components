import React, { CSSProperties } from 'react';
export interface QuillEditorProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    modules?: Record<string, unknown>;
    value?: string;
    theme?: string;
    onChange?(value: string): any;
}
declare const FormRichText: {
    ({ theme, modules, value, onChange, ...rest }: QuillEditorProps): React.JSX.Element;
    Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/Feedback").FeedbackProps>;
};
export default FormRichText;
//# sourceMappingURL=FormRichText.d.ts.map