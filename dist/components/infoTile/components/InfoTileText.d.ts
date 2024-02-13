import React from 'react';
export interface InfoTileTextProps extends React.HTMLProps<HTMLSpanElement> {
    text: string;
    badge?: boolean;
    badgeCount?: number;
}
declare const InfoTileText: ({ text, badge, badgeCount }: InfoTileTextProps) => React.JSX.Element;
export default InfoTileText;
//# sourceMappingURL=InfoTileText.d.ts.map