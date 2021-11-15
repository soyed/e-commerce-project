import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import UILink from '../../../UIKit/UILink/UILink';
import { IconType } from '../../../utils/icons';
import './Header.scss';

import { useSelector } from 'react-redux';
import { cartTotalItems } from '../../../redux/Cart/cartSelectors';

const Header = () => {
  const cartItems = useSelector(cartTotalItems);
  return (
    <div className='header'>
      <div className='header--container-1'>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.UNIVERSAL}>
          <h1>J&E</h1>
        </UILink>
      </div>

      <div className='header--container-2 '>
        <UIIcon
          iconType={IconType.CART}
          linkTo={LinkPath.CART}
          linkType={RouteType.COMMERCE}
          containerClassName='header-icon__container'
          iconContainerClassName='header-icon__container--content'
        >
          <div className='cart-header__container__text'>{cartItems}</div>
        </UIIcon>

        <UIIcon
          iconType={IconType.LIKE}
          linkTo={LinkPath.FAVORITES}
          linkType={RouteType.COMMERCE}
          iconText={'Wishlist'}
          containerClassName='header-icon__container'
          iconContainerClassName='header-icon__container--content'
        />
        <UIIcon
          iconType={IconType.USER}
          linkTo={`${LinkPath.ACCOUNT}?identify=login`}
          linkType={RouteType.COMMERCE}
          iconText={'Login'}
          containerClassName='header-icon__container'
          iconContainerClassName='header-icon__container--content'
        />
      </div>
    </div>
  );
};

export default Header;
