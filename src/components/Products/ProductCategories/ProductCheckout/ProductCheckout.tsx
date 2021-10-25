import React from 'react';
import UIButton from '../../../../UIKit/UIButton/UIButton';
import UIIcon from '../../../../UIKit/UIIcon/UIIcon';
import { IconType } from '../../../../utils/icons';
import { ProductType } from '../../utils';

interface ProductCheckoutProps {
  productName?: string;
  productPrice?: string;
  productType?: ProductType;
  productColor?: string;
  addToCart?: () => void;
  likeProduct?: () => void;
  incrementProductCount?: () => void;
  decrementProductCount?: () => void;
}

const ProductCheckout: React.FC<ProductCheckoutProps> = (props) => {
  const { productName, productPrice, productType, productColor } = props;
  return (
    <div className='flex'>
      <div className='flex justify-center items-center'>
        <h3>{productName}</h3>
        <p>{`Price: ${productPrice}`}</p>
      </div>
      <div className='flex justify-center items-center'>
        <p>{`Color: ${productColor}`}</p>
        {productType ? (
          <div className='flex justify-center items-center'>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
        ) : (
          <div className='flex'>product type</div>
        )}
      </div>
      <div className='flex justify-center items-center'>
        <div className='flex'>
          <UIIcon iconType={IconType.DECREMENT} />
          <p>0</p>
          <UIIcon iconType={IconType.INCREMENT} />
        </div>
        <div className='flex'>
          <div className='flex'>
            <UIButton text={'Add To Cart'} />
          </div>
          <div className='flex'>
            <UIIcon iconType={IconType.LIKE} hasRoute={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
