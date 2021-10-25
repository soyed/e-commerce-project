import React from 'react';
import ClassNames from 'classnames';
import { IconType } from '../../utils/icons';
import UILink from '../UILink/UILink';
import { RouteType } from '../../routes/utils';
import classNames from 'classnames';
import './UIIcon.scss';

interface UIIconProps {
  iconClassName?: string;
  containerClassName?: string;
  iconType?: IconType;
  linkTo: string;
  iconText?: string;
  linkType: RouteType;
  iconContainerClassName?: string;
  iconTextClassName?: string;
}

const UIIcon: React.FC<UIIconProps> = (props) => {
  const {
    containerClassName,
    iconClassName,
    iconType,
    linkTo,
    linkType,
    iconContainerClassName,
    iconText,
    iconTextClassName,
  } = props;
  return (
    <div className={ClassNames('icon__container', containerClassName)}>
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
    </div>
  );
};

export default UIIcon;
