import React from 'react';
import { LinkPath, RouteType, SocialLink } from '../../../routes/utils';
import UIButton from '../../../UIKit/UIButton/UIButton';
import UIContainer from '../../../UIKit/UIContainer/UIContainer';
import UILink from '../../../UIKit/UILink/UILink';
import { Category } from '../model';
import './ProductCategory.scss';
import menFashionImage from '../../../assets/homepage-men.jpg';
import womenFashionImage from '../../../assets/home-page-women.jpg';
import jeweleryImage from '../../../assets/watches-and-jewelry.jpg';
import bagsAndShoesImage from '../../../assets/bags-and-shoes.jpg';

interface ProductCategoryProps {
  linkTo?: SocialLink | LinkPath | string;
  linkType?: RouteType;
  categoryName?: string;
  categoryImage?: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = (props) => {
  const { linkTo, linkType, categoryName, categoryImage } = props;

  // Updating images for the separate categories
  const updateCategoryImage = () => {
    if (categoryName === 'MensFashion') {
      return menFashionImage;
    }

    if (categoryName === 'WomensFashion') {
      return womenFashionImage;
    }

    if (categoryName === 'BagsShoes') {
      return bagsAndShoesImage;
    }

    if (categoryName === 'JewelryWatches') {
      return jeweleryImage;
    }
  };

  return (
    <UILink linkTo={linkTo} linkType={linkType} isActive={false}>
      <div className='product-category'>
        <div className='product-category__container'>
          <div className='category__main'>
            <img
              className='category__main--img'
              src={updateCategoryImage()}
              alt={`${categoryName}-img`}
            />
          </div>
          <div className='category__content'>
            <h2 className='category__content__heading'>{categoryName}</h2>
            <p className="'category__content__text'">Shop Now</p>
          </div>
        </div>
      </div>
    </UILink>
  );
};

export default ProductCategory;
