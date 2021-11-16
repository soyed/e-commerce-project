import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import ProductCategory from './ProductCategory/ProductCategory';
import { useSelector, useDispatch } from 'react-redux';
import {
  categoryCommerce,
  categoryStatus,
  categoryError,
  categoryMarketPlace,
} from '../../redux/Category/categorySelectors';
import { Category } from './model';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { LinkPath } from '../../routes/utils';
import './CategoriesPage.scss';
import { STATUS, fetchCategories, Platform } from '../../redux/Category/utils';

interface CategoriesPageProps {
  platform?: Platform;
  linkTo?: LinkPath;
}

const CategoriesPages: React.FC<CategoriesPageProps> = (props) => {
  const { platform = Platform.COMMERCE, linkTo = LinkPath.SHOP } = props;
  // Hooks
  const dispatch = useDispatch();
  // selectors

  // conditional to determine which categories to render
  const categories: Category[] = useSelector(
    platform === Platform.COMMERCE ? categoryCommerce : categoryMarketPlace
  );
  const status: STATUS = useSelector(categoryStatus);
  const errorMessage: string = useSelector(categoryError);

  // Effects

  React.useEffect(() => {
    // fetching categories
    dispatch(fetchCategories);
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
              linkTo={`${linkTo}/${category.categoryId}/products`}
              categoryName={category.categoryName}
              categoryImage={category.image}
              categoryId={category.categoryId}
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
