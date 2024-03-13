import React from 'react';
export interface InfoTileProps extends React.HTMLProps<HTMLBaseElement> {
    icon?: string;
}
declare const InfoTile: {
    ({ icon, children }: InfoTileProps): React.JSX.Element;
    Item: ({ text }: import("./components/InfoTileItem").InfoTileItemProps) => React.JSX.Element;
    Title: ({ title, route, link, linkProps, }: import("./components/InfoTileTitle").InfoTileTitleProps) => React.JSX.Element;
    Value: ({ className, value, theme, ...rest }: import("./components/InfoTileValue").InfoTileValueProps) => React.JSX.Element;
    Col: ({ className, children, ...rest }: import("./components/InfoTileCol").InfoTileColProps) => React.JSX.Element;
};
export default InfoTile;
//# sourceMappingURL=InfoTile.d.ts.map