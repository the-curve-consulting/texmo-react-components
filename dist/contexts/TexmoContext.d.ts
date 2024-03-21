import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
type TexmoContextValue = {
    navLink: typeof NavLink;
};
declare const TexmoProvider: ({ children, ...value }: PropsWithChildren<TexmoContextValue>) => React.JSX.Element;
export declare const useTexmoContext: () => TexmoContextValue;
export default TexmoProvider;
//# sourceMappingURL=TexmoContext.d.ts.map