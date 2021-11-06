import React from 'react';
import UIButton from '../../../../UIKit/UIButton/UIButton';
import UIIcon from '../../../../UIKit/UIIcon/UIIcon';
import { IconType } from '../../../../utils/icons';
import { ProductType } from '../../utils';

import { useDispatch } from 'react-redux';

import './ProductCheckout.scss';
import { addCartItem } from '../../../../redux/Cart/CartActionCreators';
import { CartItem } from '../../../../redux/Cart/utils';
import { Product } from '../../model';
import { addToWishList } from '../../../../redux/WishList/wishlistActionCreators';
import './ProductCheckout.scss';
import { DEFAULT_QUANTITY } from '../../../../utils/utils';
interface ProductCheckoutProps {
  product?: Product;
}

const ProductCheckout: React.FC<ProductCheckoutProps> = (props) => {
  const { product } = props;

  const dispatch = useDispatch();

  // states
  const [productQuantity, setProductQuantity] =
    React.useState<number>(DEFAULT_QUANTITY);

  const handleIncrementQuantity = () => {
    setProductQuantity((prevState) => prevState + 1);
  };
  const handleDecrementQuantity = () => {
    if (productQuantity > DEFAULT_QUANTITY) {
      setProductQuantity((prevState) => prevState - 1);
    }
  };

  const handleLikeProduct = (product: Product) => {
    const item: CartItem = {
      quantity: DEFAULT_QUANTITY,
      product: product,
    };

    dispatch(addToWishList(item));
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      product: product,
      quantity: productQuantity,
    };
    dispatch(addCartItem(cartItem));
    // reset the quantity of products to add
    setProductQuantity(DEFAULT_QUANTITY);
  };

  return (
    <div className='product-checkout'>
      <div className='product-checkout__container'>
        <div className='product-checkout__container-1'>
          <div className='flex'>{`${product.ratings} stars`}</div>
        </div>
        <div className='product-checkout__container-2'>
          <div className='container-2__1'>
            <p className='container-2__text-1'>{product.name}</p>
          </div>
          <div className='container-2__2'>
            <p className='container-2__text-2'>{`$${product.price}`}</p>
          </div>
        </div>

        <div className='product-checkout__container-3'>
          <p className='container-3__text-1'>Color:</p>
          <p className='container-3__text-2'>{product.color}</p>
        </div>
        <div className='product-checkout__container-4 '>
          <div className='checkout__section'>
            <UIIcon
              iconType={IconType.DECREMENT}
              hasRoute={false}
              onClickIcon={handleDecrementQuantity}
              containerClassName='checkout__section--btn-1'
            />
            <div className='checkout__section--quantity'>
              <p>{productQuantity}</p>
            </div>
            <UIIcon
              iconType={IconType.INCREMENT}
              hasRoute={false}
              onClickIcon={handleIncrementQuantity}
              containerClassName='checkout__section--btn-2'
            />
          </div>
        </div>

        <div className='product-checkout__container-5 '>
          <div className='checkout__buttons'>
            <div className='checkout__buttons--1'>
              <UIButton text={'Add To Cart'} onClickButton={handleAddToCart} />
            </div>
            <div className='checkout__buttons--2'>
              <UIIcon
                iconType={IconType.LIKE}
                hasRoute={false}
                onClickIcon={() => {
                  handleLikeProduct(product);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
