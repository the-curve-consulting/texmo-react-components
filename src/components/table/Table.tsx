import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableBody from './components/TableBody';

interface TableProps extends React.ComponentProps<typeof Bootstrap.Table> {}

class Table extends React.PureComponent<TableProps> {
  static Head = TableHead;
  static Row = TableRow;
  static Cell = TableCell;
  static Body = TableBody;

  render() {
    const { children, ...rest } = this.props;
    return <Bootstrap.Table {...rest}>{children}</Bootstrap.Table>;
  }
}

export default Table;
