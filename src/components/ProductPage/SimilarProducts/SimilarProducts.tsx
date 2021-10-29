import React from 'react';
import UILoadingSpinner from '../../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { Product } from '../model';
import './SimilarProducts.scss';

interface SimilarProductsProps {}

const SimilarProducts: React.FC<SimilarProductsProps> = (props) => {
  const {} = props;

  return (
    <div className='similar-products flex h-screen-1/4 justify-center items-center bg-purple-400'>
      <div className='flex flex-col items-center justify-evenly '>
        <h2>Similar Products</h2>
        <div>
          {/* Should i use a slider or just list some of the products and route to the similar products page? */}
          List of Products
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
