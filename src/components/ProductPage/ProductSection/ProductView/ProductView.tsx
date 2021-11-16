import React from 'react';

import './ProductView.scss';
interface ProductViewProps {
  imageSrc?: string;
  imageAlt?: string;
}

const ProductView: React.FC<ProductViewProps> = (props) => {
  const { imageSrc, imageAlt } = props;

  return (
    <div className='product-view'>
      <div className='product-view__container'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='product-view__container--img'
        />
      </div>
    </div>
  );
};

export default ProductView;
