import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/Cart/CartActionCreators';
import { CartItem } from '../../redux/Cart/utils';
import {
  addToWishList,
  removeFromWishlist,
} from '../../redux/WishList/wishlistActionCreators';
import { wishlistProducts } from '../../redux/WishList/wishlistSelectors';
import UICard from '../../UIKit/UICard/UICard';
import { Product } from '../ProductPage/model';
import './Favorites.scss';

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = (props) => {
  // hooks
  const dispatch = useDispatch();
  // methods
  const items: CartItem[] = useSelector(wishlistProducts);

  const handleAddToCart = (product: Product) => {
    const item: CartItem = {
      product: product,
      quantity: 1,
    };
    // add item to cart and remove from wishlist at the same item
    dispatch(addCartItem(item));
    dispatch(removeFromWishlist(product.id));
  };

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <>
      {items.length === 0 && (
        <div className='favorites__empty'>
          <div className='favorites__empty--container'>
            <h3 className='favorites__empty--container__text'>
              No Liked Products
            </h3>
          </div>
        </div>
      )}
      {items.length > 0 && items && (
        <div className='favorites'>
          {items?.map((item) => (
            <UICard
              key={item.product.id}
              src={item.product.image}
              name={item.product.name}
              price={item.product.price}
              checkout
              onClickAddToCart={() => {
                handleAddToCart(item.product);
              }}
              onClickIcon={() => {
                handleRemoveFromWishlist(item.product.id);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Favorites;
