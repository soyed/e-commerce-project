import React from 'react';
import UICard from '../../../UIKit/UICard/UICard';
import UILoadingSpinner from '../../../UIKit/UILoadingSpinner/UILoadingSpinner';
import { Product } from '../model';
import './SimilarProducts.scss';
import { useRouteMatch } from 'react-router-dom';

interface SimilarProductsProps {
  products?: Product[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = (props) => {
  const { products } = props;

  const { url } = useRouteMatch();

  return (
    <div className='similar-products flex h-screen-1/4 justify-center items-center bg-purple-400'>
      <div className='similar-products--container'>
        <div className='similar-products--container__1'>
          <h2>Similar Products</h2>
        </div>

        <div className='similar-products--container__2'>
          {products?.map((product) => (
            <UICard
              key={product.id}
              name={product.name}
              price={product.price}
              linkTo={`${url}/${product.id}`}
              src={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
