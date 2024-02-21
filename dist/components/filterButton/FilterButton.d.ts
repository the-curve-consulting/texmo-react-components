import React from 'react';
import { ButtonProps } from 'react-bootstrap';
interface FilterButtonProps extends ButtonProps {
    filterExists: boolean;
}
declare const FilterButton: ({ variant, filterExists, className, ...rest }: FilterButtonProps) => React.JSX.Element;
export default FilterButton;
//# sourceMappingURL=FilterButton.d.ts.map