import React from 'react';

export interface FooterProps extends React.HTMLProps<HTMLBaseElement> {
  organisation: string;
}

const Footer = ({ className, organisation }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`mt-auto pt-3 pb-2 text-end text-muted small ${className}`}
    >
      Copyright © {organisation} {currentYear}
    </footer>
  );
};

export default Footer;
