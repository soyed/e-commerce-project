import classNames from 'classnames';
import React from 'react';
import { LinkPath, RouteType, SocialLink } from '../../routes/utils';
import { IconType } from '../../utils/icons';
import UIIcon from '../UIIcon/UIIcon';
import UILink from '../UILink/UILink';
import './UICard.scss';

interface UICardProps {
  containerClassName?: string;
  className?: string;
  src?: string;
  alt?: string;
  name?: string;
  price?: number;
  checkout?: boolean;
  showLike?: boolean;
  linkTo?: LinkPath | SocialLink | string;
  onClickIcon?: () => void;
  onClickAddToCart?: () => void;
}

const UICard: React.FC<UICardProps> = (props) => {
  const {
    containerClassName,
    className,
    src,
    alt,
    name,
    price,
    checkout = false,
    linkTo,
    onClickIcon,
    onClickAddToCart,
    showLike = true,
  } = props;

  return (
    <UILink linkTo={linkTo} linkType={RouteType.COMMERCE} isActive={false}>
      <div className={classNames('card', containerClassName)}>
        <div className={classNames('card--container', className)}>
          <div className='card--container-1'>
            <img src={src} alt={`${name}-img`} />
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
                <button
                  onClick={onClickAddToCart}
                  className='card--container-3__actions-1__btn'
                >
                  Add to Cart
                </button>
              </div>
            )}
            <div className='card--container-3__actions-2'>
              {!showLike ? (
                <UIIcon
                  iconType={IconType.DELETE}
                  onClickIcon={onClickIcon}
                  hasRoute={false}
                />
              ) : (
                <UIIcon
                  iconType={IconType.LIKE}
                  onClickIcon={onClickIcon}
                  hasRoute={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </UILink>
  );
};

export default UICard;
