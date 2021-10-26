import classNames from 'classnames';
import React from 'react';
import { LinkPath, RouteType, SocialLink } from '../../../routes/utils';
import UIButton from '../../../UIKit/UIButton/UIButton';
import UIContainer from '../../../UIKit/UIContainer/UIContainer';
import UILink from '../../../UIKit/UILink/UILink';
import { Category } from '../model';

interface ProductCategoryProps {
  linkTo?: SocialLink | LinkPath | string;
  linkType?: RouteType;
  categoryName?: string;
  containerClassName?: string;
  className?: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = (props) => {
  const { linkTo, linkType, className, containerClassName, categoryName } =
    props;

  return (
    <UILink linkTo={linkTo} linkType={linkType} isActive={false}>
      <UIContainer
        className={classNames(
          'flex justify-center items-center',
          containerClassName
        )}
      >
        <div
          className={classNames(
            'flex flex-col h-8 items-center justify-evenly',
            className
          )}
        >
          <h2>{categoryName}</h2>
          <p>Shop Now</p>
        </div>
      </UIContainer>
    </UILink>
  );
};

export default ProductCategory;
