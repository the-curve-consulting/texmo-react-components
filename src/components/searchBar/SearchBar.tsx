import React from 'react';
import * as Bootstrap from 'react-bootstrap';
import SearchBarInput from './components/SearchBarInput';
import SearchBarButton from './components/SearchBarButton';

export interface SearchBarProps extends Bootstrap.InputGroupProps {}

const SearchBar = ({ children, ...rest }: SearchBarProps) => {
  return (
    <div className="d-flex">
      <Bootstrap.InputGroup {...rest}>{children}</Bootstrap.InputGroup>
    </div>
  );
};

SearchBar.Input = SearchBarInput;
SearchBar.Button = SearchBarButton;

export default SearchBar;
