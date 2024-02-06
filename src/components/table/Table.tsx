import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableBody from './components/TableBody';

interface TableProps extends Bootstrap.TableProps {}

const Table = ({ className, children, ...rest }: TableProps) => {
  return (
    <Bootstrap.Table className={className} {...rest}>
      {children}
    </Bootstrap.Table>
  );
};

Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;

export default Table;
