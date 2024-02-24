import React from "react";
import { NavLink } from 'react-router-dom';
export interface NavProps {
    navLink: typeof NavLink;
    children: React.ReactNode;
}
declare const NavProvider: ({ navLink, children }: NavProps) => React.JSX.Element;
export default NavProvider;
//# sourceMappingURL=NavProvider.d.ts.map