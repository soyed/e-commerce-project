import React from 'react';
import UILoadingSpinner from '../../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { Product } from '../model';

interface ProductViewedProps {
  products?: Product[];
  isLoading?: boolean;
}

const ProductViewed: React.FC<ProductViewedProps> = (props) => {
  const { isLoading } = props;

  return (
    <div className='flex justify-center item-center'>
      {isLoading ? (
        <UILoadingSpinner />
      ) : (
        <div className='flex justify-center items-center'>
          Fetching Viewed Products
        </div>
      )}
    </div>
  );
};

export default ProductViewed;
