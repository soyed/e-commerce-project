import React from 'react';
import classNames from 'classnames';

interface UIContainerProps {
  className?: string;
  onClick?: () => {};
}

const UIContainer: React.FC<UIContainerProps> = (props) => {
  const { className, children, onClick } = props;
  return (
    <div className={classNames(className)} onClick={onClick}>
      {children}
    </div>
  );
};

export default UIContainer;
