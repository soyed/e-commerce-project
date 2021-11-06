import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../redux/Category/utils';
import {
  getMarketplaceError,
  getMarketPlaceProducts,
  getMarketplaceStatus,
} from '../../redux/MarketPlace/marketPlaceSelectors';
import { fetchMarketPlaceProducts } from '../../redux/MarketPlace/utils';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
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
    <div className='market-place'>
      {true && (
        <div className='market-place__container-1'>
          <UILoadingSpinner />
        </div>
      )}

      <div className='market-place__container-2'></div>
      <div className='market-place__container-3'></div>
    </div>
  );
};

export default MarketPlace;
