import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import ProductCategory from './ProductCategory/ProductCategory';
import { useSelector, useDispatch } from 'react-redux';
import {
  categoryCommerce,
  categoryStatus,
  categoryError,
} from '../../redux/Category/categorySelectors';
import { Category } from './model';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { LinkPath } from '../../routes/utils';
import './CategoriesPage.scss';
import { STATUS, fetchCategories } from '../../redux/Category/utils';

const CategoriesPages = () => {
  // Hooks
  const dispatch = useDispatch();
  // selectors
  const categories: Category[] = useSelector(categoryCommerce);
  const status: STATUS = useSelector(categoryStatus);
  const errorMessage: string = useSelector(categoryError);
  console.log(errorMessage);

  // Effects

  React.useEffect(() => {
    // fetching categories
    // dispatch(fetchCategories);
  }, []);

  return (
    <div className='categories-page'>
      {status === STATUS.LOADING && (
        <div className='categories-page__container-1'>
          <UILoadingSpinner />
        </div>
      )}
      {status === STATUS.IDLE && (
        <UIContainer className='categories-page__container-2'>
          {categories?.map((category) => (
            <ProductCategory
              key={category.id}
              linkTo={`${LinkPath.SHOP}/${category.categoryId}/products`}
              categoryName={category.categoryId}
              categoryImage={category.image}
            />
          ))}
        </UIContainer>
      )}

      {status === STATUS.FAILED && (
        <div className='categories-page__container-3'>{errorMessage}</div>
      )}
    </div>
  );
};

export default CategoriesPages;
