import productsActions from './productsActions';

const initialState = {
  status: false,
  products: {},
  similarProducts: {},
  viewedProducts: {},
  pageNumber: 0,
};
const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case productsActions.LOADING_CATEGORY_PRODUCTS:
      return { ...state, status: action.payload.products };
    case productsActions.FETCH_CATEGORY_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
