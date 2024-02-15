/// <reference types="react" />
import { NavLink } from 'react-router-dom';
export interface NavContextProps {
    navLink: typeof NavLink;
    open: boolean;
}
declare const NavContext: import("react").Context<NavContextProps>;
export default NavContext;
//# sourceMappingURL=NavContext.d.ts.map