import React from 'react';
import { fetchCategories } from '../../redux/Category/categoryReducer';
import UIContainer from '../../UIKit/UIContainer/UIContainer';
import ProductCategory from './ProductCategory/ProductCategory';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

const CategoriesPages = () => {
  return (
    <UIContainer
      className={'flex flex-col flex-1 flex-wrap bg-pink-300 justify-evenly'}
    >
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
      <ProductCategory />
    </UIContainer>
  );
};

export default CategoriesPages;
