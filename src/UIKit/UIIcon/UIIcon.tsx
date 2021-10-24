import React from 'react';
import ClassNames from 'classnames';

interface UIIconProps {
  iconClassName?: string;
  containerClassName?: string;
  iconName?: string;
  onClickIcon?: () => {};
}

const UIIcon: React.FC<UIIconProps> = (props) => {
  const { containerClassName, iconClassName, iconName, onClickIcon } = props;
  return (
    <div className={ClassNames('icon__container', containerClassName)}>
      <i
        className={ClassNames('icon__content', iconClassName, iconClassName)}
        onClick={onClickIcon}
      ></i>
    </div>
  );
};

export default UIIcon;
