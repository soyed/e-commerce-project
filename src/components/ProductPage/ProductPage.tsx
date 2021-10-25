import React from 'react';
import ProductSection from './ProductSection/ProductSection';
import ProductViewed from './ProductViewed/ProductViewed';
import SimilarProducts from './SimilarProducts/SimilarProducts';

const ProductPage = () => {
  return (
    <>
      <ProductSection />
      <SimilarProducts />
      <ProductViewed />
    </>
  );
};

export default ProductPage;
