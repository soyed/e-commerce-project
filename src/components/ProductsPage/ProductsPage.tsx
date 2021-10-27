import React from 'react';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategories } from '../../redux/Products/utils';
import {
  fetchProducts,
  productsLoading,
} from '../../redux/Products/productsSelectors';
import { Product } from '../ProductPage/model';

interface ProductsPageProps {
  products?: string[];
}

const ProductsPage: React.FC<ProductsPageProps> = () => {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(productsLoading);
  const products: Product[] = useSelector(fetchProducts);

  // dispatch(fetchProductsByCategories('MensFashion'));

  return (
    <UIContainer className={'flex flex-1 flex-wrap'}>
      <div className='flex justify-center'></div>
    </UIContainer>
  );
};

export default ProductsPage;
