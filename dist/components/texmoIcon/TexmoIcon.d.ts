import React from 'react';
import { TexmoIcons } from '../../types';
export interface TexmoIconProps extends React.SVGProps<SVGSVGElement> {
    icon: TexmoIcons;
}
declare const TexmoIcon: ({ icon, height, ...rest }: TexmoIconProps) => React.JSX.Element;
export default TexmoIcon;
//# sourceMappingURL=TexmoIcon.d.ts.map