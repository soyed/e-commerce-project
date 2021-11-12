import React from 'react';
import './ExploreMarket.scss';
import marketPlaceImg from '../../../assets/explore-market-place-2.jpg';
import UIButton from '../../../UIKit/UIButton/UIButton';
import { LinkPath } from '../../../routes/utils';

interface ExploreMarketProps {}

const ExploreMarket: React.FC<ExploreMarketProps> = () => {
  return (
    <div className='explore-market'>
      <div className='explore-market__container-1'>
        <img
          src={marketPlaceImg}
          alt={'Explore-explore-market-img'}
          className='explore-img'
        />
      </div>
      <div className='explore-market__container-2'>
        <h2 className='explore-market__container-2__heading'>
          Explore Our Market Place Platform
        </h2>
        <p className='explore-market__container-2__text-2'>
          The market place is a third party platform where products can be
          bought from other sellers in the community
        </p>
        <UIButton
          text={'Explore Market Place'}
          linkTo={LinkPath.MARKET_PLACE}
        />
      </div>
    </div>
  );
};

export default ExploreMarket;
