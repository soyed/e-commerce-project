import React from 'react';
import UIButton from '../../../../UIKit/UIButton/UIButton';
import { Product } from '../../model';
import './ProductInformation.scss';

interface ProductInformationProps {
  product?: Product;
}

const ProductInformation: React.FC<ProductInformationProps> = (props) => {
  const { product } = props;
  return (
    <div className='product-info'>
      {/* The important Product information */}
      <div className='product-info--container'>
        <div className='product-info--container__1'>
          <div className='product-info__1'>
            <p className='product-info__text-1'>Product Category</p>
            <p className='product-info__text-2'>{product.category}</p>
          </div>
        </div>
        <div className='product-info--container__2'>
          <div className='product-info__2'>
            <p className='product-info__text-1'>SKU/PRODUCT ID</p>
            <p className='product-info__text-2'>{product.id}</p>
          </div>
        </div>
        <div className='product-info--container__3'>
          <div className='product-info__3'>
            <p className='product-info__text-1'>Description</p>
            <p className='product-info__text-2'>{product.description}</p>
          </div>
        </div>
        <div className='product-info--container__4'>
          <div className='product-info__4'>
            <p className='product-info__text-1'>Stars</p>
            <p className='product-info__text-2'>{product.ratings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
