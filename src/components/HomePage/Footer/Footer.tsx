import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import UILink from '../../../UIKit/UILink/UILink';
import { IconType } from '../../../utils/icons';

const Footer = () => {
  return (
    <div className='flex flex-col h-12'>
      <div className='flex justify-center'>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.FAQ}>
          <p>FAQ</p>
        </UILink>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.CONTACT}>
          <p>Contact</p>
        </UILink>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.SHIPPING}>
          <p>Shipping</p>
        </UILink>
      </div>
      <div className='flex justify-center align-center'>
        <UIIcon
          iconType={IconType.INSTAGRAM}
          linkTo={'https://www.instagram.com'}
          linkType={RouteType.SOCIAL}
        />
        <UIIcon
          iconType={IconType.FACEBOOK}
          linkTo={'https://www.facebook.com'}
          linkType={RouteType.SOCIAL}
        />
        <UIIcon
          iconType={IconType.TWITTER}
          linkTo={'https://www.twitter.com'}
          linkType={RouteType.SOCIAL}
        />
      </div>
    </div>
  );
};

export default Footer;
