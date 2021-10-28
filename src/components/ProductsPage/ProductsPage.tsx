import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategories } from '../../redux/Products/utils';
import {
  fetchProducts,
  productsLoading,
} from '../../redux/Products/productsSelectors';
import { Product } from '../ProductPage/model';
import './ProductsPage.scss';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import UICard from '../../UIKit/UICard/UICard';

import { useParams, useRouteMatch, Route } from 'react-router-dom';
import ProductPage from '../ProductPage/ProductPage';

interface ProductsPageProps {
  products?: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(productsLoading);
  const products: Product[] = useSelector(fetchProducts);

  // dispatch(fetchProductsByCategories('MensFashion'));
  const params = useParams();
  const { categoryName } = params;
  console.log(categoryName);

  const { url, path } = useRouteMatch();
  console.log(url, path);

  return (
    <>
      <div className='products-page'>
        {isLoading ? (
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
                linkTo={`${url}/${products.name}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
