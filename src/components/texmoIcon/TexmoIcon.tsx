import React from 'react';
import { TexmoIcons } from 'types';
import Assets from '../../icons/assets.svg';
import Checklist from '../../icons/checklist.svg';
import ProductCatalogue from '../../icons/product-catalogue.svg';
import StockManagement from '../../icons/stock-management.svg';
import Users1 from '../../icons/users1.svg';
import Users2 from '../../icons/users2.svg';
import Users3 from '../../icons/users3.svg';
import Warranty from '../../icons/warranty.svg';
import WorkOrders1 from '../../icons/work-orders1.svg';
import WorkOrders2 from '../../icons/work-orders2.svg';

export interface TexmoIconProps extends React.HTMLProps<HTMLImageElement> {
  icon: TexmoIcons;
}

const TexmoIcon = ({ icon, ...rest }: TexmoIconProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'assets':
        return Assets;
      case 'checklist':
        return Checklist;
      case 'product-catalogue':
        return ProductCatalogue;
      case 'stock-management':
        return StockManagement;
      case 'users1':
        return Users1;
      case 'users2':
        return Users2;
      case 'users3':
        return Users3;
      case 'warranty':
        return Warranty;
      case 'work-orders1':
        return WorkOrders1;
      case 'work-orders2':
        return WorkOrders2;
    }
  };

  return <img src={getIcon()} alt={icon} {...rest} />;
};

export default TexmoIcon;
