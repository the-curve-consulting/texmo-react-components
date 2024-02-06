import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import { themes } from 'types';
interface ButtonProps extends Bootstrap.ButtonProps {
    label: string;
    variant?: themes;
}
declare const Button: ({ label, className, variant, ...rest }: ButtonProps) => React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map