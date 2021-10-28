import React from 'react';
import ProductCheckout from './ProductCheckout/ProductCheckout';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductView from './ProductView/ProductView';
import './ProductSection.scss';

interface ProductSectionProp {}

const ProductSection: React.FC<ProductSectionProp> = (props) => {
  return (
    <div className='product-section'>
      <div className='product-section__container-1 '>
        <ProductView />
        <ProductCheckout />
      </div>
      <div className='product-section__container-1  flex justify-center'>
        <ProductInformation />
      </div>
    </div>
  );
};

export default ProductSection;
