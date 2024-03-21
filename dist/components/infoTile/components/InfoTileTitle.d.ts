import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
export interface InfoTileTitleProps extends React.HTMLProps<HTMLHeadingElement> {
    title: string;
    route?: string;
    link?: typeof Link;
    linkProps?: LinkProps;
}
declare const InfoTileTitle: ({ title, route, link, linkProps, className, }: InfoTileTitleProps) => React.JSX.Element;
export default InfoTileTitle;
//# sourceMappingURL=InfoTileTitle.d.ts.map