import classNames from 'classnames';
import React from 'react';
import { IconType } from '../../utils/icons';
import UIIcon from '../UIIcon/UIIcon';
import './UICard.scss';

interface UICardProps {
  containerClassName?: string;
  className?: string;
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  name?: string;
  price?: number;
  checkout?: boolean;
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
    checkout = false,
  } = props;

  return (
    <div className={classNames('card', containerClassName)}>
      <div className={classNames('card--container', className)}>
        <div className='card--container-1'>
          <img src={src} alt={alt} />
        </div>
        <hr />
        <div className='card--container-2'>
          <div className='card--container-2__info'>
            <p className='card--container-2__info__text'>{name}</p>
            <p className='card--container-2__info__text'>{`$${price}`}</p>
          </div>
        </div>
        <div className='card--container-3'>
          {checkout && (
            <div className='card--container-3__actions-1'>
              <button className='card--container-3__actions-1__btn'>
                Add to Cart
              </button>
            </div>
          )}
          <div className='card--container-3__actions-2'>
            <UIIcon iconType={checkout ? IconType.DELETE : IconType.LIKE} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UICard;
