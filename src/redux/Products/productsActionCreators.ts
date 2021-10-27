import productsActions from './productsActions';

export const loadingProducts = (status: boolean) => {
  return {
    type: productsActions.LOADING_CATEGORY_PRODUCTS,
    payload: { status },
  };
};

export const fetchingProducts = (products: any[]) => {
  return {
    type: productsActions.FETCH_CATEGORY_PRODUCTS,
    payload: { products },
  };
};
