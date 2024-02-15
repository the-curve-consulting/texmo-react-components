import React from 'react';
import { InputGroupProps } from 'react-bootstrap';
export interface SearchBarProps extends InputGroupProps {
}
declare const SearchBar: {
    ({ children, ...rest }: SearchBarProps): React.JSX.Element;
    Input: ({ className, ...rest }: import("./components/SearchBarInput").SearchBarInputProps) => React.JSX.Element;
    Button: ({ className, ...rest }: import("./components/SearchBarButton").SearchBarButtonProps) => React.JSX.Element;
};
export default SearchBar;
//# sourceMappingURL=SearchBar.d.ts.map