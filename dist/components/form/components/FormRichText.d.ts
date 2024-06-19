import React, { CSSProperties } from 'react';
import 'quill/dist/quill.snow.css';
export interface QuillEditorProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    modules?: Record<string, unknown>;
    value?: string;
    theme?: string;
    onChange?(value: string): any;
    importCallback?(): any;
}
declare const FormRichText: ({ modules, value, onChange, theme, importCallback, ...rest }: QuillEditorProps) => React.JSX.Element;
export default FormRichText;
//# sourceMappingURL=FormRichText.d.ts.map