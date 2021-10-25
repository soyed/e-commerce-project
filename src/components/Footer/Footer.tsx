import React from 'react';
import { LinkPath, RouteType, SocialLink } from '../../routes/utils';
import UIIcon from '../../UIKit/UIIcon/UIIcon';
import UILink from '../../UIKit/UILink/UILink';
import { IconType } from '../../utils/icons';

const Footer = () => {
  return (
    <div className='flex flex-col h-screen-1/10'>
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
          linkTo={SocialLink.INSTAGRAM}
          linkType={RouteType.SOCIAL}
        />
        <UIIcon
          iconType={IconType.FACEBOOK}
          linkTo={SocialLink.FACEBOOK}
          linkType={RouteType.SOCIAL}
        />
        <UIIcon
          iconType={IconType.TWITTER}
          linkTo={SocialLink.TWITTER}
          linkType={RouteType.SOCIAL}
        />
      </div>
    </div>
  );
};

export default Footer;
