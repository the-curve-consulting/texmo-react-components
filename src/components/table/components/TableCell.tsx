import React, { useContext } from 'react';
import TableSectionContext, { TableSection } from '../TableSectionContext';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

export interface TableCellProps extends React.HTMLProps<HTMLTableCellElement> {
  borderStart?: boolean;
}

const TableCell = ({
  borderStart,
  className,
  children,
  ...rest
}: TableCellProps) => {
  const section = useContext(TableSectionContext);
  const border = borderStart ? 'border-start' : undefined;

  switch (section) {
    case TableSection.HEAD:
      return (
        <th scope="col list-cell" className={className} {...rest}>
          {children}
        </th>
      );
    case TableSection.BODY:
    case TableSection.NONE:
    default:
      return (
        <td className="px-0 pt-0 pb-3 texmo-table" {...rest}>
          <div
            className={classNames(
              className,
              'h-100 d-flex align-items-center list-cell'
            )}
            {...rest}
          >
            <Card className="h-100 w-100 py-3">
              <Card.Body
                className={`d-flex justify-content-center align-items-center py-0 ${border}`}
              >
                <div className="w-100 h-100">{children}</div>
              </Card.Body>
            </Card>
          </div>
        </td>
      );
  }
};

export default TableCell;
