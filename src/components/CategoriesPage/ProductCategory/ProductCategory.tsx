import React, { Component } from 'react';
import { Category } from '../model';

interface ProductCategoryProps {
  categories?: Category[];
}

const ProductCategory: React.FC<ProductCategoryProps> = (props) => {
  const {} = props;

  return (
    <div className='flex'>
      <div className='flex justify-center items-center'></div>
    </div>
  );
};

export default ProductCategory;
