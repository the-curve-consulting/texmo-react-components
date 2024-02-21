import React from 'react';
export interface InfoTileProps extends React.HTMLProps<HTMLBaseElement> {
    icon: string;
}
declare const InfoTile: {
    ({ icon, children }: InfoTileProps): React.JSX.Element;
    Item: ({ text, value, theme, }: import("./components/InfoTileItem").InfoTileItemProps) => React.JSX.Element;
    Title: ({ title, link, linkProps }: import("./components/InfoTileTitle").InfoTileTitleProps) => React.JSX.Element;
};
export default InfoTile;
//# sourceMappingURL=InfoTile.d.ts.map