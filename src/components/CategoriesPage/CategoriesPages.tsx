import React from 'react';
import { fetchCategories } from '../../redux/Category/categoryReducer';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import ProductCategory from './ProductCategory/ProductCategory';
import { useSelector } from 'react-redux';
import { categoryList } from '../../redux/Category/categorySelectors';
import { Category, getCategoryPath } from './model';

// const dispatch = useDispatch();

const CategoriesPages = () => {
  const categories: Category[] = useSelector(categoryList);
  return (
    <UIContainer
      className={'flex flex-col flex-1 flex-wrap bg-pink-300 justify-evenly'}
    >
      {categories.map((category) => (
        <ProductCategory
          key={category.id}
          linkTo={getCategoryPath(category.id)}
          categoryName={category.categoryName}
        />
      ))}
    </UIContainer>
  );
};

export default CategoriesPages;
