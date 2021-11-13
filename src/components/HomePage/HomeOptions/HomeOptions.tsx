import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';
import './HomeOptions.scss';

interface HomeOptionsProps {}

const HomeOptions: React.FC<HomeOptionsProps> = (props) => {
  const {} = props;

  return (
    <div className='home-options'>
      <div className='home-options--container'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.MARKET_PLACE}
          activeClassName='active-link-1'
        >
          <h3 className='home-options--container__text'>Market Place</h3>
        </UILink>
      </div>
      <div className='home-options--container'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.CATEGORIES}
        >
          <h3 className='home-options--container__text'>Categories</h3>
        </UILink>
      </div>
      <div className='home-options--container'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.BUYING_OPTIONS}
          activeClassName='active-link-3'
        >
          <h3 className='home-options--container__text'>Buying Options</h3>
        </UILink>
      </div>
    </div>
  );
};

export default HomeOptions;
