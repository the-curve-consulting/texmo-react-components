import React from "react";
import { ButtonProps } from "react-bootstrap";
export interface TabButtonProps extends ButtonProps {
    text: string;
    selected?: boolean;
}
declare const TabButton: ({ className, selected, text, ...rest }: TabButtonProps) => React.JSX.Element;
export default TabButton;
//# sourceMappingURL=TabButton.d.ts.map