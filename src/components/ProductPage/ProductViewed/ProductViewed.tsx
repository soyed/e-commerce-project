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
    <div className='flex h-screen-1/4 justify-center item-center bg-purple-600'>
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
