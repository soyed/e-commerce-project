import React from 'react';

interface ProductCategoriesProp {}

const ProductCategories: React.FC<ProductCategoriesProp> = (props) => {
  return (
    <div className='flex flex-1'>
      <p>Product Categories</p>
    </div>
  );
};

export default ProductCategories;
