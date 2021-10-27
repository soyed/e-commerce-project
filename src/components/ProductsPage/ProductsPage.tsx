import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import { useDispatch } from 'react-redux';
import { fetchProductsByCategories } from '../../redux/Products/utils';

interface ProductsPageProps {
  products?: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const dispatch = useDispatch();

  // dispatch(fetchProductsByCategories('MensFashion'));

  return (
    <UIContainer className={'flex flex-1 flex-wrap'}>
      <div className='flex justify-center'></div>
    </UIContainer>
  );
};

export default ProductsPage;
