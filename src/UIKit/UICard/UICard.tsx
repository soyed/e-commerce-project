import classNames from 'classnames';
import React from 'react';
import { IconType } from '../../utils/icons';
import UIIcon from '../UIIcon/UIIcon';
import UIImage from '../UIImage/UIImage';

interface UICardProps {
  containerClassName?: string;
  className?: string;
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  name?: string;
  price?: string;
}

const UICard: React.FC<UICardProps> = (props) => {
  const {
    containerClassName,
    className,
    width,
    height,
    src,
    alt,
    name,
    price,
  } = props;

  return (
    <div className={classNames('card', containerClassName)}>
      <div className={classNames('card--container', className)}>
        <div className='card--container-1'>
          <img src={src} alt={alt} />
        </div>
        <div className='card--container-2'>
          <div className='card--container-2__info'>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
          <UIIcon iconType={IconType.LIKE} />
        </div>
      </div>
    </div>
  );
};

export default UICard;
