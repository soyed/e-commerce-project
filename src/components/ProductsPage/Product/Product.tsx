import React from 'react';
import UIContainer from '../../../UIKit/UIContainer/UIContainer';
import './Product.scss';
interface ProductProps {
  productName?: string;
  price?: string;
  image?: string;
}

const Product: React.FC<ProductProps> = (props) => {
  return (
    <UIContainer className='product--container flex justify-center'></UIContainer>
  );
};

export default Product;
