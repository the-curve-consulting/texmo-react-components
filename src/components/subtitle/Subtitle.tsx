import React from 'react';

export interface SubTitleProps extends React.HTMLProps<HTMLDivElement> {
  text: string;
}

const Subtitle = ({ className, text, ...rest }: SubTitleProps) => {
  return (
    <div className={`${className} text-nowrap`} {...rest}>
      {text}
    </div>
  );
};

export default Subtitle;
