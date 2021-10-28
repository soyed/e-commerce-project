import React from 'react';
import UIImage from '../../../../UIKit/UIImage/UIImage';
import './ProductView.scss';
interface ProductViewProps {
  imageSrc?: string;
  imageAlt?: string;
}

const ProductView: React.FC<ProductViewProps> = (props) => {
  const { imageSrc, imageAlt } = props;

  return (
    <div className='product-view'>
      <UIImage src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default ProductView;
