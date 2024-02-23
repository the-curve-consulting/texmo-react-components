import React from 'react';
import { Themes } from 'types';
export interface InfoTileValueProps extends React.HTMLProps<HTMLSpanElement> {
    value: string | number;
    theme?: Themes;
}
declare const InfoTileValue: ({ className, value, theme, ...rest }: InfoTileValueProps) => React.JSX.Element;
export default InfoTileValue;
//# sourceMappingURL=InfoTileValue.d.ts.map