import React, { CSSProperties } from 'react';
export interface QuillEditorProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    modules?: Record<string, unknown>;
    value?: string;
    valueChange?(value: string): any;
}
declare const FormRichText: ({ modules, value, valueChange, ...rest }: QuillEditorProps) => React.JSX.Element;
export default FormRichText;
//# sourceMappingURL=FormRichText.d.ts.map