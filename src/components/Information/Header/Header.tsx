import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import UILink from '../../../UIKit/UILink/UILink';
import { IconType } from '../../../utils/icons';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header--container-1'>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.UNIVERSAL}>
          <h1 className=''>E-Commerce</h1>
        </UILink>
      </div>

      {/* The Action bars of the page */}
      <div className='header--container-2 '>
        <UIIcon
          iconType={IconType.LIKE}
          linkTo={LinkPath.FAVORITES}
          linkType={RouteType.COMMERCE}
          iconText={'WishList'}
          containerClassName='icon__container'
        />
        <UIIcon
          iconType={IconType.USER}
          linkTo={LinkPath.ACCOUNT}
          linkType={RouteType.COMMERCE}
          iconText={'Account'}
          containerClassName='icon__container'
        />
        <UIIcon
          iconType={IconType.CART}
          linkTo={LinkPath.CART}
          linkType={RouteType.COMMERCE}
          iconText={'Cart'}
          containerClassName='icon__container'
        />
      </div>
    </div>
  );
};

export default Header;
