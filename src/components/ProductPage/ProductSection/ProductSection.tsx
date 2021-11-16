import React from 'react';
import ProductCheckout from './ProductCheckout/ProductCheckout';
import ProductInformation from './ProductInformation/ProductInformation';
import ProductView from './ProductView/ProductView';
import './ProductSection.scss';
import { Product } from '../model';

interface ProductSectionProp {
  product?: Product;
}

const ProductSection: React.FC<ProductSectionProp> = (props) => {
  const { product } = props;
  return (
    <div className='product-section'>
      <div className='product-section__container'>
        <div className='product-section__container-1'>
          <div className='product-section__gallery'>
            <ProductView
              imageAlt={`${product.name}-img`}
              imageSrc={product.image}
            />
          </div>
          <div className='product-section__checkout'>
            <ProductCheckout product={product} />
          </div>
        </div>

        <div className='product-section__container-2'>
          <ProductInformation product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
