import React from 'react';
import ProductCheckout from './ProductCheckout/ProductCheckout';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductView from './ProductView/ProductView';
import './ProductSection.scss';
import { Product } from '../model';

interface ProductSectionProp {
  productImage?: string;
  productPrice?: number;
  productDescription?: string;
  productColor?: string;
  productId?: string;
  productRatings?: number;
  productName?: string;
  productCategory?: string;
  product?: Product;
}

const ProductSection: React.FC<ProductSectionProp> = (props) => {
  const {
    productColor,
    productDescription,
    productId,
    productImage,
    productPrice,
    productRatings,
    productName,
    productCategory,
  } = props;
  return (
    <div className='product-section'>
      <div className='product-section__container'>
        <div className='product-section__container-1 '>
          <ProductView
            imageAlt={`${productName}-img`}
            imageSrc={productImage}
          />
          <ProductCheckout
            productPrice={productPrice}
            productName={productName}
            productColor={productColor}
            productRatings={productRatings}
          />
        </div>
        <div className='product-section__container-2'>
          <ProductInformation
            productId={productId}
            productDescription={productDescription}
            productCategory={productCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
