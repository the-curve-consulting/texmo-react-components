/// <reference types="react" />
export interface NavContextProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
declare const NavContext: import("react").Context<NavContextProps>;
export declare const useNavContext: () => NavContextProps;
export default NavContext;
//# sourceMappingURL=NavContext.d.ts.map