import React, { useContext } from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';
import { Card } from 'react-bootstrap';

export interface ListCellProps extends React.HTMLProps<HTMLDivElement> {
  borderStart?: boolean;
}

const ListCell = ({
  borderStart,
  className,
  children,
  ...rest
}: ListCellProps) => {
  const section = useContext(ListSectionContext);
  const border = borderStart ? 'border-start' : undefined;

  switch (section) {
    case ListSection.HEAD:
      return (
        <div className={`col ${className}`} {...rest}>
          {children}
        </div>
      );
    case ListSection.BODY:
    case ListSection.NONE:
    default:
      return (
        <div
          className={`h-100 d-flex align-items-center ${className}`}
          {...rest}
        >
          <Card className="h-100 w-100 py-3">
            <Card.Body
              className={`d-flex justify-content-center align-items-center py-0 ${border}`}
            >
              <div className="w-100">{children}</div>
            </Card.Body>
          </Card>
        </div>
      );
  }
};

export default ListCell;
