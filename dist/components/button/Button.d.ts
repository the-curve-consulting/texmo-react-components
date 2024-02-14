import React from 'react';
import { Themes } from 'types';
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap';
interface ButtonProps extends BootstrapButtonProps {
    label?: string;
    icon?: string;
    variant?: Themes;
}
declare const Button: ({ label, icon, children, className, variant, ...rest }: ButtonProps) => React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map