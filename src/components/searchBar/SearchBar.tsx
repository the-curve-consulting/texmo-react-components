import React from 'react';
import SearchBarInput from './components/SearchBarInput';
import SearchBarButton from './components/SearchBarButton';
import { InputGroupProps, InputGroup } from 'react-bootstrap';

export interface SearchBarProps extends InputGroupProps {}

const SearchBar = ({ children, ...rest }: SearchBarProps) => {
  return (
    <div className="d-flex">
      <InputGroup className="flex-nowrap search-input-group" {...rest}>
        {children}
      </InputGroup>
    </div>
  );
};

SearchBar.Input = SearchBarInput;
SearchBar.Button = SearchBarButton;

export default SearchBar;
