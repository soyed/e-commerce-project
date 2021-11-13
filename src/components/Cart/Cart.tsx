import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCartItem,
  clearCartItems,
  deleteItemFromCart,
  removeItemFromCart,
} from '../../redux/Cart/CartActionCreators';
import { cartTotalPrice, fetchCartItems } from '../../redux/Cart/cartSelectors';
import { CartItem } from '../../redux/Cart/utils';
import { addToWishList } from '../../redux/WishList/wishlistActionCreators';
import { Product } from '../ProductPage/model';
import './Cart.scss';
import Item from './CartItem/CartItem';

interface CartProps {}

const Cart: React.FC<CartProps> = (props) => {
  const cartTotal: number = useSelector(cartTotalPrice);
  const cartItems: CartItem[] = useSelector(fetchCartItems);
  const dispatch = useDispatch();

  const handleLikeProduct = (product: Product) => {
    const item: CartItem = {
      product: product,
      quantity: 1,
    };
    dispatch(addToWishList(item));
  };

  // React.useEffect(() => {
  //   dispatch(clearCartItems());
  // }, []);

  const handleDeleteProduct = (productId: string) => {
    dispatch(deleteItemFromCart(productId));
  };

  const handleIncrementQuantity = (product: Product, quantity: number) => {
    dispatch(addCartItem({ product: product, quantity: quantity }));
  };

  const handleDecrementQuantity = (productId: string) => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <div className='cart'>
      <div className='cart__container'>
        <div className='cart__container-1'>
          <h2 className='cart__container-1__text'>My Cart</h2>
        </div>
        <div className='cart__container-2'>
          {cartItems?.map((item) => (
            <Item
              key={item.product.id}
              productQuantity={item.quantity}
              product={item.product}
              onClickLike={() => {
                handleLikeProduct(item.product);
              }}
              onClickDelete={handleDeleteProduct}
              onClickDecrement={handleDecrementQuantity}
              onClickIncrement={handleIncrementQuantity}
            />
          ))}
        </div>
      </div>
      <div className='cart__container--checkout'>
        <div className='cart__container--checkout--content-1'>
          <h3 className='cart__container--checkout--content-1__text'>
            Your Total
          </h3>
        </div>
        <hr />
        <div className='cart__container--checkout--content-2'>
          <div className='checkout__container-1'>
            <p className='checkout__container-1__text'>Total</p>
            <p className='checkout__container-1__text'>{`$${cartTotal}`}</p>
          </div>
          <div className='checkout__container-2'>
            <p className='checkout__container-2__text'>Shipping</p>
            <p className='checkout__container-2__text'>free</p>
          </div>
          <div className='checkout__container-3'>
            <div className='checkout__container-3__btn'>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
