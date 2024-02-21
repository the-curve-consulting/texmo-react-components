import React from 'react';
import { Themes } from 'types';
export interface InfoTileItemProps extends React.HTMLProps<HTMLSpanElement> {
    text: string;
    value: number;
    theme?: Themes;
}
declare const InfoTileItem: ({ text, value, theme, }: InfoTileItemProps) => React.JSX.Element;
export default InfoTileItem;
//# sourceMappingURL=InfoTileItem.d.ts.map