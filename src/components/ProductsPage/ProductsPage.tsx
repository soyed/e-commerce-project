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
import { CartItem } from '../../redux/Cart/utils';
import { addToWishList } from '../../redux/WishList/wishlistActionCreators';

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

  // methods
  const handleLikeProduct = (product: Product) => {
    const item: CartItem = {
      quantity: 1,
      product: product,
    };
    dispatch(addToWishList(item));
  };

  // TODO: Disable liked button once product has been added to wishList

  return (
    <>
      <div className='products-page'>
        {status === STATUS.LOADING ? (
          <div className='products-page__container-1'>
            <UILoadingSpinner />
          </div>
        ) : (
          <div className='products-page__container-2'>
            {products.map((product) => (
              <UICard
                key={product.id}
                src={product.image}
                alt={product.name}
                price={product.price}
                name={product.name}
                linkTo={`${url}/${product.id}`}
                onClickIcon={() => {
                  handleLikeProduct(product);
                }}
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
