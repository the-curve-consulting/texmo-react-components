import React, { useContext } from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';
import * as Bootstrap from 'react-bootstrap';

export interface ListCellProps extends React.HTMLProps<HTMLDivElement> {}

const ListCell = ({ className, children, ...rest }: ListCellProps) => {
  const section = useContext(ListSectionContext);

  switch (section) {
    case ListSection.HEAD:
      return (
        <div className={`col-2 ${className}`} {...rest}>
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
          <Bootstrap.Card className="h-100 w-100">
            <Bootstrap.Card.Body className="d-flex justify-content-center align-items-center">
              <div className="w-100">{children}</div>
            </Bootstrap.Card.Body>
          </Bootstrap.Card>
        </div>
      );
  }
};

export default ListCell;
