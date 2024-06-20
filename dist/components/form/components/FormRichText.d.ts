import React, { CSSProperties } from 'react';
import 'quill/dist/quill.snow.css';
export interface QuillEditorProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    modules?: Record<string, unknown>;
    value?: string;
    theme?: string;
    debug?: boolean;
    onChange?(value: string): any;
    importCallback?(): any;
}
declare const FormRichText: {
    ({ modules, value, onChange, theme, importCallback, debug, ...rest }: QuillEditorProps): React.JSX.Element;
    Feedback: import("react-bootstrap/esm/helpers").BsPrefixRefForwardingComponent<"div", import("react-bootstrap/esm/Feedback").FeedbackProps>;
};
export default FormRichText;
//# sourceMappingURL=FormRichText.d.ts.map