import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../redux/Cart/utils';
import { STATUS } from '../../redux/Category/utils';
import {
  getMarketplaceError,
  getMarketPlaceProducts,
  getMarketplaceStatus,
} from '../../redux/MarketPlace/marketPlaceSelectors';
import { fetchMarketPlaceProducts } from '../../redux/MarketPlace/utils';
import { addToWishList } from '../../redux/WishList/wishlistActionCreators';
import UICard from '../../UIKit/UICard/UICard';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { DEFAULT_QUANTITY } from '../../utils/utils';
import { Product } from '../ProductPage/model';
import './MarketPlace.scss';

const MarketPlace = () => {
  const dispatch = useDispatch();
  // hooks
  React.useEffect(() => {
    // dispatch(fetchMarketPlaceProducts());
  }, []);

  // selectors
  const products: Product[] = useSelector(getMarketPlaceProducts);
  const status: STATUS = useSelector(getMarketplaceStatus);
  const errorMessage: string = useSelector(getMarketplaceError);

  const handleLikeProduct = (product: Product) => {
    const item: CartItem = {
      product: product,
      quantity: DEFAULT_QUANTITY,
    };
    // Add to wishlist
    dispatch(addToWishList(item));
  };

  return (
    <div className='market-place'>
      {status === STATUS.FAILED && (
        <div className='market-place__container-1'>
          <UILoadingSpinner />
        </div>
      )}
      <div className='market-place__container-2'>
        {products?.map((product) => (
          <UICard
            key={product.id}
            src={product.image}
            alt={product.name}
            price={product.price}
            name={product.name}
            onClickIcon={() => {
              handleLikeProduct(product);
            }}
          />
        ))}
      </div>
      {status === STATUS.FAILED && (
        <div className='market-place__container-3'>{errorMessage}</div>
      )}
    </div>
  );
};

export default MarketPlace;
