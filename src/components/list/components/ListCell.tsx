import React, { useContext } from 'react';
import ListSectionContext, { ListSection } from '../ListSectionContext';
import classNames from 'classnames';

export interface ListCellProps extends React.HTMLProps<HTMLDivElement> {
  borderStart?: boolean;
  background?: string;
}

const ListCell = ({
  borderStart,
  className,
  children,
  background,
  ...rest
}: ListCellProps) => {
  const section = useContext(ListSectionContext);
  const border = borderStart ? 'border-start' : undefined;

  switch (section) {
    case ListSection.HEAD:
      return (
        <div
          className={classNames(className, 'col list-cell text-uppercase')}
          {...rest}
        >
          {children}
        </div>
      );
    case ListSection.BODY:
    case ListSection.NONE:
    default:
      return (
        <div
          className={classNames(
            className,
            'h-100 d-flex align-items-center list-cell'
          )}
          {...rest}
        >
          <div
            className={`bg-transparent card card-body h-100 w-100 py-3 d-flex justify-content-center align-items-center py-0 ${border}`}
            style={{ backgroundColor: background }}
          >
            <div className="w-100">{children}</div>
          </div>
        </div>
      );
  }
};

export default ListCell;
