// Redux Thunk

import { Product } from '../../components/ProductPage/model';
import { getProductsByCategory } from '../../services/API/API';
import { excludedCategories, Platform, STATUS } from '../Category/utils';
import {
  fetchingProducts,
  productsStatus,
  productsFailed,
} from './productsActionCreators';

// parse ProductsFetch
const validatePlatform = (categoryId: string) => {
  return excludedCategories.some((category) => category === categoryId);
};

const parseFetchedProducts = (
  products: any[],
  categoryId: string
): Product[] => {
  let parsedProducts: Product[] = [];
  console.log(products[0].reviews.toString());

  for (let key in products) {
    if (products[key].category_id === categoryId) {
      parsedProducts.push({
        id: products[key]._id,
        name: products[key].name,
        description: products[key].description,
        category: products[key].category,
        stock: products[key].stock,
        ratings: products[key].ratings,
        price: products[key].price,
        image: products[key].image[0],
        sales: products[key].sales,
        color: products[key].color,
        platform: validatePlatform(products[key].category)
          ? Platform.MARKETPLACE
          : Platform.COMMERCE,
      });
    }
  }
  console.log(parsedProducts);

  return parsedProducts;
};

// Fetching from Endpoint
export const fetchProductsByCategories = (categoryId: string) => {
  return async function (dispatch: any) {
    try {
      dispatch(productsStatus(STATUS.LOADING));
      const response = await getProductsByCategory(categoryId);
      const responseData = await response.json();
      const { products } = responseData;
      const parsedProducts = parseFetchedProducts(products, categoryId);
      console.log(parsedProducts);
      dispatch(fetchingProducts(parsedProducts));
      dispatch(productsStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(
        productsFailed(`Error - Failed to fetch products for ${categoryId}`)
      );
      dispatch(productsStatus(STATUS.FAILED));
    }
  };
};
