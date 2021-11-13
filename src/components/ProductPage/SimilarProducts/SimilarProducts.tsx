import React from 'react';
import UICard from '../../../UIKit/UICard/UICard';
import UILoadingSpinner from '../../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { Product } from '../model';
import './SimilarProducts.scss';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../../redux/Cart/utils';
import { addCartItem } from '../../../redux/Cart/CartActionCreators';
import { addToWishList } from '../../../redux/WishList/wishlistActionCreators';

interface SimilarProductsProps {
  products?: Product[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = (props) => {
  const { products } = props;

  const dispatch = useDispatch();

  const { url } = useRouteMatch();

  const handleAddToCart = (product: Product) => {
    const item: CartItem = {
      product: product,
      quantity: 1,
    };
    dispatch(addCartItem(item));
  };

  const handleLikeProduct = (product: Product) => {
    const item: CartItem = {
      product: product,
      quantity: 1,
    };
    dispatch(addToWishList(item));
  };

  return (
    <div className='similar-products'>
      <div className='similar-products--container'>
        <div className='similar-products--container__1'>
          <h2>Similar Products</h2>
        </div>

        <div className='similar-products--container__2'>
          {products?.slice(0, 3).map((product) => (
            <UICard
              containerClassName='card-similar-products'
              key={product.id}
              name={product.name}
              price={product.price}
              linkTo={`${url}/${product.id}`}
              src={product.image}
              checkout
              onClickIcon={() => {
                handleLikeProduct(product);
              }}
              onClickAddToCart={() => {
                handleAddToCart(product);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
