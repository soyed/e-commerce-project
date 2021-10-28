import React from 'react';
import ProductSection from './ProductSection/ProductSection';
import ProductViewed from './ProductViewed/ProductViewed';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  productsLoading,
} from '../../redux/Products/productsSelectors';
import { Product } from './model';

const ProductPage = () => {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(productsLoading);
  const products: Product[] = useSelector(fetchProducts);
  return (
    <>
      <ProductSection
        key={products[0].id}
        productImage={products[0].image}
        productId={products[0].id}
        productColor={products[0].color}
        productDescription={products[0].description}
        productPrice={products[0].price}
        productRatings={products[0].ratings}
        productName={products[0].name}
        productCategory={products[0].category}
      />
      <SimilarProducts />
      <ProductViewed />
    </>
  );
};

export default ProductPage;
