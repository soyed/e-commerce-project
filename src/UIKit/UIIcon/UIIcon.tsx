import React from 'react';
import ClassNames from 'classnames';
import { IconType } from '../../utils/icons';
import UILink from '../UILink/UILink';
require('./UIIcon.scss');

interface UIIconProps {
  iconClassName?: string;
  containerClassName?: string;
  iconType?: IconType;
  onClickIcon?: () => {};
  linkTo: string;
}

const UIIcon: React.FC<UIIconProps> = (props) => {
  const {
    containerClassName,
    iconClassName,
    iconType,
    onClickIcon,
    linkTo,
    children,
  } = props;
  return (
    <div className={ClassNames('icon__container', containerClassName)}>
      <UILink linkTo={linkTo} isActive={false}>
        <i className={ClassNames('icon__content', iconType, iconClassName)}></i>
      </UILink>
    </div>
  );
};

export default UIIcon;
