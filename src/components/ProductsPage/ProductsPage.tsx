import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategories } from '../../redux/Products/utils';
import {
  fetchProducts,
  statusForProducts,
  failedProducts,
} from '../../redux/Products/productsSelectors';
import { Product } from '../ProductPage/model';
import './ProductsPage.scss';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import UICard from '../../UIKit/UICard/UICard';

import { useParams, useRouteMatch } from 'react-router-dom';
import { STATUS } from '../../redux/Category/utils';

interface ProductsPageProps {
  products?: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const dispatch = useDispatch();
  const status: STATUS = useSelector(statusForProducts);
  const products: Product[] = useSelector(fetchProducts);
  const errorMessage: string = useSelector(failedProducts);

  // dispatch(fetchProductsByCategories('MensFashion'));
  const params = useParams();
  const { categoryId } = params;
  console.log(categoryId);

  const { url, path } = useRouteMatch();
  console.log(url, path);

  // hooks

  // fetching products
  React.useEffect(() => {
    // dispatch(fetchProductsByCategories(categoryId));
  }, [categoryId]);

  return (
    <>
      <div className='products-page'>
        {status === STATUS.LOADING ? (
          <div className='products-page__container-1'>
            <UILoadingSpinner />
          </div>
        ) : (
          <div className='products-page__container-2'>
            {products.map((products) => (
              <UICard
                key={products.id}
                src={products.image}
                alt={products.name}
                price={products.price}
                name={products.name}
                linkTo={`${url}/${products.id}`}
              />
            ))}
          </div>
        )}
        {status === STATUS.FAILED && (
          <div className='products-page__container-3'>{errorMessage}</div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
