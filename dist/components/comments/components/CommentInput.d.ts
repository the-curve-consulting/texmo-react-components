import React from 'react';
import { FormControlProps } from 'react-bootstrap';
export interface CommentInput extends FormControlProps {
    onSubmit: () => void;
}
declare const CommentInput: ({ onSubmit, ...rest }: CommentInput) => React.JSX.Element;
export default CommentInput;
//# sourceMappingURL=CommentInput.d.ts.map