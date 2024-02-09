import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface InfoTileTitleProps {
  title: string;
  link?: string;
  linkProps?: LinkProps;
}

const InfoTileTitle = ({ title, link, linkProps }: InfoTileTitleProps) => {
  const titleComponent = <h3 className="fw-bold mb-4">{title}</h3>;

  if (link) {
    return (
      <Link
        to={link}
        className={`stretched-link text-reset link-underline-dark link-underline-opacity-0 link-underline-opacity-100-hover ${linkProps?.className}`}
        {...linkProps}
      >
        <>{titleComponent}</>
      </Link>
    );
  }

  return titleComponent;
};

export default InfoTileTitle;
