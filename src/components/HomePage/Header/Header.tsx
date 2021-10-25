import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import UILink from '../../../UIKit/UILink/UILink';
import { IconType } from '../../../utils/icons';

const Header = () => {
  return (
    <div className='flex h-32 items-center justify-between'>
      <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.UNIVERSAL}>
        <h1 className=''>E-Commerce</h1>
      </UILink>

      {/* The Action bars of the page */}
      <div className='flex items-center justify-end'>
        <UIIcon
          iconType={IconType.LIKE}
          linkTo={LinkPath.FAVORITES}
          linkType={RouteType.COMMERCE}
          iconText={'WishList'}
        />
        <UIIcon
          iconType={IconType.USER}
          linkTo={LinkPath.ACCOUNT}
          linkType={RouteType.COMMERCE}
          iconText={'Account'}
        />
        <UIIcon
          iconType={IconType.SORT}
          linkTo={LinkPath.CART}
          linkType={RouteType.COMMERCE}
          iconText={'Cart'}
        />
      </div>
    </div>
  );
};

export default Header;
