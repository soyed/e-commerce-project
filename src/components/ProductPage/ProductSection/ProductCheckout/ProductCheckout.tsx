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
interface ProductCheckoutProps {
  product?: Product;
}

const ProductCheckout: React.FC<ProductCheckoutProps> = (props) => {
  const { product } = props;

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

  const handleLikeProduct = (product: Product) => {
    const item: CartItem = {
      quantity: 1,
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
    setProductQuantity(0);
  };

  return (
    <div className='product-checkout'>
      <div className='product-checkout__container'>
        <div className='product-checkout__container-1'>
          <h3>{product.name}</h3>
          <p>{`Price: $${product.price}`}</p>
        </div>
        <div className='product-checkout__container-2'>
          <p>{`Color: ${product.color}`}</p>
          <div className='flex'>{product.ratings}</div>
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
