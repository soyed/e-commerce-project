import React from 'react';
import UIButton from '../../../../UIKit/UIButton/UIButton';
import UIIcon from '../../../../UIKit/UIIcon/UIIcon';
import { IconType } from '../../../../utils/icons';
import { ProductType } from '../../utils';

import { useDispatch } from 'react-redux';

import './ProductCheckout.scss';
import { addCartItem } from '../../../../redux/Cart/CartActionCreators';
import { CartItem } from '../../../../redux/Cart/utils';

interface ProductCheckoutProps {
  productName?: string;
  productPrice?: number;
  productType?: ProductType;
  productColor?: string;
  productRatings?: number;
}

const ProductCheckout: React.FC<ProductCheckoutProps> = (props) => {
  const {
    productName,
    productPrice,
    productType,
    productColor,
    productRatings,
  } = props;

  const dispatch = useDispatch();

  // states
  const [productQuantity, setProductQuantity] = React.useState<number>(0);

  const handleIncrementQuantity = () => {
    setProductQuantity((prevState) => prevState + 1);
  };
  const handleDecrementQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity((prevState) => prevState - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      product: {
        price: productPrice,
        color: productColor,
        ratings: productRatings,
        name: productName,
      },
      quantity: productQuantity,
    };
    dispatch(addCartItem(cartItem));
  };

  return (
    <div className='product-checkout'>
      <div className='product-checkout__container'>
        <div className='product-checkout__container-1'>
          <h3>{productName}</h3>
          <p>{`Price: $${productPrice}`}</p>
        </div>
        <div className='product-checkout__container-2'>
          <p>{`Color: ${productColor}`}</p>
          {productType ? (
            <div className='flex justify-center items-center'>
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
            </div>
          ) : (
            <div className='flex'>{productRatings}</div>
          )}
        </div>
        <div className='product-checkout__container-3 '>
          <div className='flex'>
            <UIIcon
              iconType={IconType.DECREMENT}
              hasRoute={false}
              onClickIcon={handleDecrementQuantity}
            />
            <p>{productQuantity}</p>
            <UIIcon
              iconType={IconType.INCREMENT}
              hasRoute={false}
              onClickIcon={handleIncrementQuantity}
            />
          </div>
          <div className='flex'>
            <div className='flex'>
              <UIButton text={'Add To Cart'} onClickButton={handleAddToCart} />
            </div>
            <div className='flex'>
              <UIIcon iconType={IconType.LIKE} hasRoute={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
