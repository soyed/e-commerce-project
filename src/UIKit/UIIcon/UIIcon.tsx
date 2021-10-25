import React from 'react';
import ClassNames from 'classnames';
import { IconType } from '../../utils/icons';
import UILink from '../UILink/UILink';
import { RouteType } from '../../routes/utils';
require('./UIIcon.scss');

interface UIIconProps {
  iconClassName?: string;
  containerClassName?: string;
  iconType?: IconType;
  linkTo: string;
  iconText?: string;
  linkType: RouteType;
}

const UIIcon: React.FC<UIIconProps> = (props) => {
  const { containerClassName, iconClassName, iconType, linkTo, linkType } =
    props;
  return (
    <div className={ClassNames('icon__container', containerClassName)}>
      <UILink linkTo={linkTo} isActive={false} linkType={RouteType.SOCIAL}>
        <i className={ClassNames('icon__content', iconType, iconClassName)}></i>
      </UILink>
    </div>
  );
};

export default UIIcon;
