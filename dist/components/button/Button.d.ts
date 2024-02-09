import React from 'react';
import { Themes } from 'types';
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap';
interface ButtonProps extends BootstrapButtonProps {
    label: string;
    variant?: Themes;
}
declare const Button: ({ label, className, variant, ...rest }: ButtonProps) => React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map