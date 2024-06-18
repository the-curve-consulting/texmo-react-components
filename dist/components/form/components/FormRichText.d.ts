import React, { CSSProperties } from 'react';
import Quill from 'quill';
export interface QuillEditorProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    modules?: Record<string, unknown>;
    valueChange?(value: string): any;
    value?: string;
}
declare const _default: React.ForwardRefExoticComponent<QuillEditorProps & React.RefAttributes<Quill>>;
export default _default;
//# sourceMappingURL=FormRichText.d.ts.map