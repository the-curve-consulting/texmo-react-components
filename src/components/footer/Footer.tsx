import React from 'react';

export interface FooterProps extends React.HTMLProps<HTMLBaseElement> {
  organization: string;
}

const Footer = ({ className, organization }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`mt-auto pt-3 pb-2 text-end text-muted small ${className}`}
    >
      Copyright © {organization} {currentYear}
    </footer>
  );
};

export default Footer;
