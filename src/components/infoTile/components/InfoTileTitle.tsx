import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface InfoTileTitleProps
  extends React.HTMLProps<HTMLHeadingElement> {
  title: string;
  route?: string;
  link?: typeof Link;
  linkProps?: LinkProps;
}

const InfoTileTitle = ({
  title,
  route = '',
  link,
  linkProps,
  className,
}: InfoTileTitleProps) => {
  const titleComponent = <h4 className={`${className} fw-bold`}>{title}</h4>;

  if (link) {
    const LinkComponent = link;

    return (
      <LinkComponent
        to={route}
        className={`stretched-link text-reset link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover ${linkProps?.className}`}
        {...linkProps}
      >
        {titleComponent}
      </LinkComponent>
    );
  }

  return titleComponent;
};

export default InfoTileTitle;
