import React from 'react';
import { LinkPath, RouteType, SocialLink } from '../../../routes/utils';
import UIButton from '../../../UIKit/UIButton/UIButton';
import UIContainer from '../../../UIKit/UIContainer/UIContainer';
import UILink from '../../../UIKit/UILink/UILink';
import { Category } from '../model';
import './ProductCategory.scss';
import menFashionImage from '../../../assets/homepage-men.jpg';
import womenFashionImage from '../../../assets/home-page-women.jpg';
import jewelryImage from '../../../assets/watches-and-jewelry.jpg';
import bagsAndShoesImage from '../../../assets/bags-and-shoes.jpg';
import beautyImage from '../../../assets/beauty.jpg';
import kidsImage from '../../../assets/kids.jpg';
import { CategoryType } from '../../../redux/Category/utils';

interface ProductCategoryProps {
  linkTo?: SocialLink | LinkPath | string;
  linkType?: RouteType;
  categoryName?: string;
  categoryImage?: string;
  categoryId?: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = (props) => {
  const { linkTo, linkType, categoryName, categoryImage, categoryId } = props;

  // Updating images for the separate categories
  const updateCategoryImage = () => {
    switch (categoryId) {
      case CategoryType.MEN:
        return menFashionImage;
      case CategoryType.WOMEN:
        return womenFashionImage;
      case CategoryType.BAGS:
        return bagsAndShoesImage;
      case CategoryType.JEWELRY:
        return jewelryImage;
      case CategoryType.BEAUTY:
        return beautyImage;
      case CategoryType.ELECTRONICS:
        return;
      case CategoryType.HOME_IMPROVEMENT:
        return;
      case CategoryType.OFFICE:
        return;
      case CategoryType.KIDS:
        return kidsImage;
      case CategoryType.PHONES:
        return;
      case CategoryType.PETS:
        return;
      case CategoryType.OUTDOOR:
        return;
    }
  };

  return (
    <UILink linkTo={linkTo} linkType={linkType} isActive={false}>
      <div className='product-category'>
        <div className='product-category__container'>
          <div className='category__main'>
            <img
              className='category__main--img'
              src={updateCategoryImage() || categoryImage}
              alt={`${categoryName}-img`}
            />
          </div>
          <div className='category__content'>
            <h2 className='category__content__heading'>{categoryName}</h2>
            <p className="'category__content__text'">Shop Now</p>
          </div>
        </div>
        {/* the  */}
      </div>
    </UILink>
  );
};

export default ProductCategory;
