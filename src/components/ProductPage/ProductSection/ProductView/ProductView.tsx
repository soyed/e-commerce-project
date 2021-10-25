import React from 'react';
import UIImage from '../../../../UIKit/UIImage/UIImage';

interface ProductViewProps {
  imageSrc?: string;
  imageAlt?: string;
}

const ProductView: React.FC<ProductViewProps> = (props) => {
  const { imageSrc, imageAlt } = props;
  return (
    <div className='flex'>
      <UIImage src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default ProductView;
