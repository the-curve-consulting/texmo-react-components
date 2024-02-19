import React from 'react';
import { TexmoProps } from 'types';
export interface TexmoProviderProps extends TexmoProps {
    children: React.ReactNode;
}
declare const TexmoProvider: ({ children, ...rest }: TexmoProviderProps) => React.JSX.Element;
export default TexmoProvider;
//# sourceMappingURL=TexmoProvider.d.ts.map