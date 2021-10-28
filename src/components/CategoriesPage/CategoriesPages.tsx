import React from 'react';
import { fetchCategories } from '../../redux/Category/categoryReducer';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import ProductCategory from './ProductCategory/ProductCategory';
import { useSelector } from 'react-redux';
import {
  categoryList,
  categoryLoading,
} from '../../redux/Category/categorySelectors';
import { Category } from './model';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { LinkPath } from '../../routes/utils';
import './CategoriesPage.scss';

const CategoriesPages = () => {
  const categories: Category[] = useSelector(categoryList);
  const isLoading: boolean = useSelector(categoryLoading);

  return (
    <div className='categories-page'>
      {isLoading ? (
        <div className='categories-page__container-1'>
          <UILoadingSpinner />
        </div>
      ) : (
        <UIContainer className='categories-page__container-2'>
          {categories.map((category) => (
            <ProductCategory
              key={category.id}
              linkTo={`${LinkPath.SHOP}/${category.categoryName}/products`}
              categoryName={category.categoryName}
              categoryImage={category.image}
            />
          ))}
        </UIContainer>
      )}
    </div>
  );
};

export default CategoriesPages;
