import React from 'react';
import ProductSection from './ProductSection/ProductSection';
import ProductViewed from './ProductViewed/ProductViewed';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from './model';
import './ProductPage.scss';

import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../redux/Product/utils';
import {
  failedProduct,
  fetchedProduct,
  statusForProduct,
} from '../../redux/Product/productSelectors';
import { STATUS } from '../../redux/Category/utils';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';

const ProductPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const status: STATUS = useSelector(statusForProduct);
  const product: Product = useSelector(fetchedProduct);
  const errorMessage: string = useSelector(failedProduct);

  // extract category name and productId
  const { categoryId, productId } = params;
  console.log(categoryId, productId);

  React.useEffect(() => {
    // dispatch(fetchProduct(productId, categoryId));
  }, [categoryId, productId]);
  return (
    <>
      <div className='product-page'>
        {status === STATUS.LOADING ? (
          <UILoadingSpinner />
        ) : (
          <ProductSection
            key={product.id}
            productImage={product.image}
            productId={product.id}
            productColor={product.color}
            productDescription={product.description}
            productPrice={product.price}
            productRatings={product.ratings}
            productName={product.name}
            productCategory={product.category}
            product={product}
          />
        )}
        {status === STATUS.LOADING ? <UILoadingSpinner /> : <SimilarProducts />}
        <ProductViewed />
      </div>
      <div className='product-page__error'>
        {status === STATUS.FAILED && <div>{errorMessage}</div>}
      </div>
    </>
  );
};

export default ProductPage;
