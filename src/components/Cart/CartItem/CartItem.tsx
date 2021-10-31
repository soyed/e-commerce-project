import React from 'react';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import { IconType } from '../../../utils/icons';
import './CartItem.scss';

interface CartItemProps {
  productImg?: string;
  productName?: string;
  productPrice?: number;
  productQuantity?: number;
  productColor?: string;
  onClickLike?: () => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    productImg,
    productName,
    productPrice,
    productColor,
    productQuantity = 1,
    onClickLike,
  } = props;
  return (
    <div className='cart-item--container'>
      <div className='cart-item--container-1'>
        <img src={productImg} alt={`${productImg}-img`} />
      </div>
      <hr />
      <div className='cart-item--container-2'>
        <p className='cart-item--container-2__text'>{productName}</p>
        <p className='cart-item--container-2__text'>{`$${productPrice}`}</p>
        <p className='cart-item--container-2__text'>{productColor}</p>
      </div>
      <div className='cart-item--container-3'>
        <div className='cart-item--container-3__actions-1'>
          <UIIcon iconType={IconType.DECREMENT} />
          <div className='cart-item--container-3__actions-1__text'>
            {productQuantity}
          </div>
          <UIIcon iconType={IconType.INCREMENT} />
        </div>
        <div className='cart-item--container-3__actions-2'>
          <UIIcon iconType={IconType.LIKE} onClickIcon={onClickLike} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
