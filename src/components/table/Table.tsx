import React from 'react';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableBody from './components/TableBody';
import {
  Table as BootstrapTable,
  TableProps as BootstrapTableProps,
} from 'react-bootstrap';
import classNames from 'classnames';

interface TableProps extends BootstrapTableProps {}

const Table = ({ className, children, ...rest }: TableProps) => {
  return (
    <BootstrapTable className={classNames(className, 'texmo-table')} {...rest}>
      {children}
    </BootstrapTable>
  );
};

Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;

export default Table;
