import React from 'react';
import { CardProps as BootstrapCardProps } from 'react-bootstrap';
interface CardProps extends BootstrapCardProps {
    header?: string;
}
declare const Card: ({ header, children, className, ...rest }: CardProps) => React.JSX.Element;
export default Card;
//# sourceMappingURL=Card.d.ts.map