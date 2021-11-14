import React from 'react';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import { IconType } from '../../../utils/icons';
import { DEFAULT_QUANTITY } from '../../../utils/utils';
import { Product } from '../../ProductPage/model';
import './CartItem.scss';

interface CartItemProps {
  productQuantity: number;
  product: Product;
  onClickLike?: () => void;
  onClickDecrement?: (productId: string) => void;
  onClickIncrement?: (product: Product, quantity: number) => void;
  onClickDelete?: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    productQuantity = 1,
    onClickLike,
    onClickDecrement,
    onClickIncrement,
    onClickDelete,
    product,
  } = props;

  const [quantity, setQuantity] = React.useState<number>(productQuantity);

  const handleIncrementQuantity = () => {
    setQuantity((prevState) => prevState + 1);
    // dispatch action to update the quantity for the specified product
    onClickIncrement?.(product, DEFAULT_QUANTITY);
  };

  const handleDecrementQuantity = () => {
    if (quantity > DEFAULT_QUANTITY) {
      setQuantity((prevState) => prevState - 1);
      // dispatch action to update the quantity for the specified product
      onClickDecrement?.(product.id);
    }
  };

  const handleRemoveProduct = () => {
    // Remove product from cart
    onClickDelete?.(product.id);
  };

  return (
    <div className='cart-item--container'>
      <div className='cart-item--container-1'>
        <img src={product.image} alt={`${product.name}-img`} />
      </div>
      <div className='cart-item--container-2'>
        <div className='cart-item--container-2__content-1'>
          <p className='cart-item--info__text-1'>product: </p>
          <p className='cart-item--info__text-2'>{product.name}</p>
        </div>

        <div className='cart-item--container-2__content-2'>
          <p className='cart-item--info__text-1'>price: </p>
          <p className='cart-item--info__text-2'>{`$${product.price}`}</p>
        </div>

        <div className='cart-item--container-2__content-3'>
          <p className='cart-item--info__text-1'>color: </p>
          <p className='cart-item--info__text-2'>{product.color}</p>
        </div>
      </div>
      <div className='cart-item--container-3'>
        <div className='cart-item--container-3__content'>
          <UIIcon
            iconType={IconType.DECREMENT}
            hasRoute={false}
            onClickIcon={handleDecrementQuantity}
            containerClassName='cart-item__btn--container'
            iconContainerClassName='cart-item__btn--container__content'
            iconTextClassName='cart-item__btn--container__content--text'
            iconClassName='cart-item__btn--container__content--icon'
          />
          <div className='cart-item--container-3__content--quantity'>
            {quantity}
          </div>
          <UIIcon
            iconType={IconType.INCREMENT}
            hasRoute={false}
            onClickIcon={handleIncrementQuantity}
            containerClassName='cart-item__btn--container'
            iconContainerClassName='cart-item__btn--container__content'
            iconTextClassName='cart-item__btn--container__content--text'
            iconClassName='cart-item__btn--container__content--icon'
          />
        </div>
      </div>

      <div className='cart-item--container-4'>
        <div className='cart-item--container-4__content'></div>
        <UIIcon
          iconType={IconType.LIKE}
          onClickIcon={onClickLike}
          hasRoute={false}
        />
        <UIIcon
          iconType={IconType.DELETE}
          onClickIcon={handleRemoveProduct}
          hasRoute={false}
        />
      </div>
    </div>
  );
};

export default CartItem;
