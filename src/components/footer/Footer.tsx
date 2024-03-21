import classNames from 'classnames';
import React from 'react';

export interface FooterProps extends React.HTMLProps<HTMLBaseElement> {
  organisation: string;
}

const Footer = ({ className, organisation }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={classNames(
        className,
        'mt-auto pt-3 pb-2 text-end text-muted small px-3'
      )}
    >
      Copyright © {organisation} {currentYear}
    </footer>
  );
};

export default Footer;
