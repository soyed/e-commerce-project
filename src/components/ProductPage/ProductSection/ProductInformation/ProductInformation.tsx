import React from 'react';
import UIButton from '../../../../UIKit/UIButton/UIButton';

interface ProductInformationProps {}

const ProductInformation: React.FC<ProductInformationProps> = (props) => {
  return (
    <div className='flex'>
      {/* The important Product information */}
      <div className='flex'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center'>
            <p className='font-3x'>Product Name </p>
            <p>information</p>
          </div>
          <div className='flex flex-col justify-center'>
            <p className='font-3x'>SKU/PRODUCT ID</p>
            <p>information</p>
          </div>
          <div className='flex flex-col justify-center'>
            <p className='font-3x'>PRICE </p>
            <p>information</p>
          </div>
          <div className='flex'>
            <UIButton text={'See More'} hasRoute={false} />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center'>
            <p className='font-3x'>Description</p>
          </div>
        </div>
      </div>
      {/* Other Product Information */}
      <div className='flex'></div>
    </div>
  );
};

export default ProductInformation;
