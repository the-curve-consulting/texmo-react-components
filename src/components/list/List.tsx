import React from 'react';
import ListHead from './components/ListHead';
import ListRow from './components/ListRow';
import ListCell from './components/ListCell';
import ListCol from './components/ListCol';
import ListBody from './components/ListBody';

interface ListProps extends React.HTMLProps<HTMLDivElement> {}

const List = ({ className, children, ...rest }: ListProps) => {
  return (
    <div className={`list-container ${className}`} {...rest}>
      {children}
    </div>
  );
};

List.Head = ListHead;
List.Cell = ListCell;
List.Row = ListRow;
List.Col = ListCol;
List.Body = ListBody;

export default List;
