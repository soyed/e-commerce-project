import React from 'react';
import ClassNames from 'classnames';
import { IconType } from '../../utils/icons';
import UILink from '../UILink/UILink';
import { LinkPath, RouteType, SocialLink } from '../../routes/utils';
import classNames from 'classnames';
import './UIIcon.scss';

interface UIIconProps {
  iconClassName?: string;
  containerClassName?: string;
  iconType?: IconType;
  linkTo?: LinkPath | SocialLink;
  iconText?: string;
  linkType?: RouteType;
  iconContainerClassName?: string;
  iconTextClassName?: string;
  onClickIcon?: () => void;
  hasRoute?: boolean;
}

const UIIcon: React.FC<UIIconProps> = (props) => {
  const {
    containerClassName,
    iconClassName,
    iconType,
    linkTo,
    linkType = RouteType.COMMERCE,
    iconContainerClassName,
    iconText,
    iconTextClassName,
    hasRoute = true,
    onClickIcon,
  } = props;
  return (
    <div className={ClassNames('icon__container', containerClassName)}>
      {hasRoute ? (
        <UILink linkTo={linkTo} isActive={false} linkType={linkType}>
          <div
            className={ClassNames(
              'icon__container--content',
              iconContainerClassName
            )}
          >
            {iconText && (
              <p
                className={classNames(
                  'icon__container--content__text',
                  iconTextClassName
                )}
              >
                {iconText}
              </p>
            )}
            <i
              className={ClassNames(
                'icon__container--content__social-icon',
                iconType,
                iconClassName
              )}
            ></i>
          </div>
        </UILink>
      ) : (
        <div
          className={ClassNames(
            'icon__container--content',
            iconContainerClassName
          )}
          onClick={onClickIcon}
        >
          {iconText && (
            <p
              className={classNames(
                'icon__container--content__text',
                iconTextClassName
              )}
            >
              {iconText}
            </p>
          )}
          <i
            className={ClassNames(
              'icon__container--content__social-icon',
              iconType,
              iconClassName
            )}
          ></i>
        </div>
      )}
    </div>
  );
};

export default UIIcon;
