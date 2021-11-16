import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../redux/Cart/utils';
import { Platform, STATUS } from '../../redux/Category/utils';
import {
  getMarketplaceError,
  getMarketPlaceProducts,
  getMarketplaceStatus,
} from '../../redux/MarketPlace/marketPlaceSelectors';
import { fetchMarketPlaceProducts } from '../../redux/MarketPlace/utils';
import { addToWishList } from '../../redux/WishList/wishlistActionCreators';
import { LinkPath } from '../../routes/utils';
import UICard from '../../UIKit/UICard/UICard';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { DEFAULT_QUANTITY } from '../../utils/utils';
import CategoriesPages from '../CategoriesPage/CategoriesPages';
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

  return (
    <CategoriesPages platform={Platform.MARKETPLACE} linkTo={LinkPath.MARKET} />
  );
};

export default MarketPlace;
