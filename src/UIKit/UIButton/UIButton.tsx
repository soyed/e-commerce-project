import React from 'react';
import Classnames from 'classnames';
import UILink from '../UILink/UILink';
import { LinkPath, RouteType } from '../../routes/utils';

interface UIButtonProps {
  text: string;
  isLoading?: boolean;
  buttonContainerClass?: string;
  linkTo?: LinkPath;
  linkType?: RouteType;
  isLinkActive?: boolean;
  hasRoute?: boolean;
}

const UIButton: React.FC<UIButtonProps> = (props) => {
  const {
    text,
    isLoading = false,
    buttonContainerClass,
    linkType = RouteType.COMMERCE,
    linkTo,
    isLinkActive = false,
    hasRoute = true,
  } = props;
  return (
    <div className={Classnames('button--container', buttonContainerClass)}>
      <div className={Classnames('button--container__content')}>
        {hasRoute ? (
          <UILink linkTo={linkTo} linkType={linkType} isActive={isLinkActive}>
            <button className={Classnames('button--container__content--btn')}>
              {text}
              {/* implement loading feature */}
            </button>
          </UILink>
        ) : (
          <button className={Classnames('button--container__content--btn')}>
            {text}
            {/* implement loading feature */}
          </button>
        )}
      </div>
    </div>
  );
};

export default UIButton;
