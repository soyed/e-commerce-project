import React from 'react';
import ProductCheckout from './ProductCheckout/ProductCheckout';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductView from './ProductView/ProductView';

interface ProductSectionProp {}

const ProductSection: React.FC<ProductSectionProp> = (props) => {
  return (
    <div className='flex flex-col h-screen-1/2 bg-purple-200'>
      <div className='flex justify-evenly'>
        <ProductView />
        <ProductCheckout />
      </div>
      <div className='flex justify-center'>
        <ProductInformation />
      </div>
    </div>
  );
};

export default ProductSection;
