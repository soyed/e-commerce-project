import classNames from 'classnames';
import React from 'react';
import { LinkPath, RouteType, SocialLink } from '../../../routes/utils';
import UIIcon from '../../../UIKit/UIIcon/UIIcon';
import UILink from '../../../UIKit/UILink/UILink';
import { IconType } from '../../../utils/icons';
import './Footer.scss';

const Footer = () => {
  return (
    <div className={classNames('footer')}>
      <div className={classNames('footer--container-1')}>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.FAQ}>
          <p
            className={classNames(
              'footer--container-1__text',
              'footer--container-1__text-1'
            )}
          >
            Faq
          </p>
        </UILink>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.CONTACT}>
          <p
            className={classNames(
              'footer--container-1__text',
              'footer--container-1__text-2'
            )}
          >
            Contact
          </p>
        </UILink>
        <UILink linkType={RouteType.COMMERCE} linkTo={LinkPath.SHIPPING}>
          <p
            className={classNames(
              'footer--container-1__text',
              'footer--container-1__text-3'
            )}
          >
            Shipping
          </p>
        </UILink>
      </div>
      <div
        className={classNames(
          'footer--container-2',
          'flex justify-center align-center'
        )}
      >
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
