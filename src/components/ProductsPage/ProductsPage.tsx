import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';

interface ProductsPageProps {
  products?: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  return (
    <UIContainer className={'flex flex-1 flex-wrap'}>
      <div className='flex justify-center'></div>
    </UIContainer>
  );
};

export default ProductsPage;
