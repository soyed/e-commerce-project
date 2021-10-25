import React from 'react';
import Classnames from 'classnames';
import './UILoadingSpinner.scss';

interface UILoadingSpinnerProps {
  className?: string;
}

const UILoadingSpinner: React.FC<UILoadingSpinnerProps> = (props) => {
  const { className } = props;
  return <div className={Classnames('loading-spinner', className)}></div>;
};

export default UILoadingSpinner;
