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

const CategoriesPages = () => {
  const categories: Category[] = useSelector(categoryList);
  const isLoading: boolean = useSelector(categoryLoading);

  return (
    <>
      {isLoading ? (
        <UIContainer>
          <UILoadingSpinner
            className={'flex flex-1  bg-pink-300 justify-center items-center'}
          />
        </UIContainer>
      ) : (
        <UIContainer
          className={'flex flex-1 flex-wrap bg-pink-300 justify-evenly'}
        >
          {categories.map((category) => (
            <ProductCategory
              key={category.id}
              linkTo={`${LinkPath.SHOP}/${category.categoryName}`}
              categoryName={category.categoryName}
            />
          ))}
        </UIContainer>
      )}
    </>
  );
};

export default CategoriesPages;
